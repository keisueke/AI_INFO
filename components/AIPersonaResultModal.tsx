'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { PersonaId, getPersona } from '@/lib/personas';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AIPersonaResultModalProps {
  personaId: PersonaId;
  onClose: () => void;
  onRestart: () => void;
}

export default function AIPersonaResultModal({
  personaId,
  onClose,
  onRestart
}: AIPersonaResultModalProps) {
  const persona = getPersona(personaId);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!persona) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* モーダル */}
      <div className="relative bg-card rounded-lg border border-border shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        {/* ヘッダー */}
        <div className="sticky top-0 bg-card border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold">診断結果</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
          {/* ペルソナ名と説明 */}
          <div className="text-center pb-4 sm:pb-6 border-b border-border">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">{persona.name}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {persona.description}
            </p>
          </div>

          {/* 典型的な誤解 */}
          <div className="rounded-lg border border-yellow-500/50 bg-yellow-100/80 p-6 shadow-sm dark:border-yellow-400/60 dark:bg-yellow-950/70">
            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
              ⚠️ よくある誤解
            </h4>
            <ul className="space-y-2 text-sm text-yellow-900 dark:text-yellow-50">
              {persona.commonMisconceptions.map((misconception, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{misconception}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* アドバイス */}
          <div className="rounded-lg border border-blue-500/50 bg-blue-100/80 p-6 shadow-sm dark:border-blue-400/60 dark:bg-blue-950/70">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              💡 アドバイス
            </h4>
            <p className="text-sm text-blue-900 dark:text-blue-50 leading-relaxed">
              {persona.advice}
            </p>
          </div>

          {/* このように考えてみては？ */}
          <div className="rounded-lg border border-primary/50 bg-primary/10 p-6 shadow-sm">
            <h4 className="font-semibold mb-3 text-lg">
              このように考えてみては？
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              {persona.suggestion}
            </p>
            <Link href={persona.recommendedPath.href}>
              <Button size="lg" className="w-full">
                {persona.recommendedPath.label}へ →
              </Button>
            </Link>
          </div>

          {/* アクションボタン */}
          <div className="flex gap-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={onRestart}
              className="flex-1"
            >
              もう一度診断する
            </Button>
            <Button
              onClick={onClose}
              className="flex-1"
            >
              閉じる
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

