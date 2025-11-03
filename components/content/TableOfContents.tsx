'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

// ID生成関数（重複を防ぐ）
function generateId(text: string, index: number): string {
  const baseId = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
  
  // 空のIDの場合はindexを使用
  return baseId || `heading-${index}`;
}

export default function TableOfContents({ className }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // マウント状態を管理
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // ページ内の見出しを抽出
    const article = document.querySelector('article');
    if (!article) {
      setHeadings([]);
      return;
    }

    const headingElements = article.querySelectorAll('h2, h3');
    
    if (headingElements.length === 0) {
      setHeadings([]);
      return;
    }

    const headingList: Heading[] = [];
    const usedIds = new Set<string>();

    headingElements.forEach((element, index) => {
      const text = element.textContent?.trim() || '';
      if (!text) return;

      let id = element.id;
      
      // IDが設定されていない、または重複している場合は生成
      if (!id || usedIds.has(id)) {
        id = generateId(text, index);
        
        // 重複チェック（最大10回試行）
        let counter = 0;
        while (usedIds.has(id) && counter < 10) {
          id = `${generateId(text, index)}-${counter}`;
          counter++;
        }
      }

      usedIds.add(id);
      
      // IDが設定されていない場合は設定
      if (!element.id) {
        element.id = id;
      }

      headingList.push({
        id,
        text,
        level: parseInt(element.tagName.charAt(1), 10),
      });
    });

    setHeadings(headingList);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || headings.length === 0) {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    // 既存のObserverをクリーンアップ
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Intersection Observerで現在のセクションを検出
    const observer = new IntersectionObserver(
      (entries) => {
        // 最も上に表示されている見出しをアクティブにする
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    observerRef.current = observer;

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [headings, mounted]);

  const scrollToHeading = (id: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100; // ヘッダーの高さ分オフセット
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });

    // スクロール後にアクティブIDを設定（Observerが検出する前に）
    setTimeout(() => {
      setActiveId(id);
    }, 100);
  };

  if (!mounted || headings.length === 0) {
    return null;
  }

  return (
    <div className={cn('mb-8', className)}>
      {/* モバイル用: 折りたたみ可能なボタン */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold">目次</span>
          <span className={cn(
            'transition-transform',
            isExpanded && 'rotate-180'
          )}>
            ▼
          </span>
        </button>
        
        {isExpanded && (
          <nav className="mt-2 p-4 rounded-lg border border-border bg-card">
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => {
                      scrollToHeading(heading.id);
                      setIsExpanded(false);
                    }}
                    className={cn(
                      'text-left w-full py-1.5 px-2 rounded transition-colors',
                      'hover:bg-muted/50',
                      heading.level === 3 && 'pl-6 text-sm',
                      activeId === heading.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* デスクトップ用: 常に表示 */}
      <nav className="hidden md:block">
        <div className="sticky top-20">
          <div className="p-4 rounded-lg border border-border bg-card">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              目次
            </h3>
            <ul className="space-y-1.5">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={cn(
                      'text-left w-full py-1.5 px-2 rounded text-sm transition-colors',
                      'hover:bg-muted/50',
                      heading.level === 3 && 'pl-6 text-xs',
                      activeId === heading.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

