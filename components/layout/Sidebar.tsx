"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarLink {
  href: string
  label: string
  children?: SidebarLink[]
}

const sidebarLinks: SidebarLink[] = [
  {
    href: "/basics",
    label: "生成AIの基礎",
    children: [
      { href: "/basics/how-it-works", label: "仕組み" },
      { href: "/basics/capabilities", label: "能力と限界" },
    ],
  },
  {
    href: "/building-website",
    label: "Webサイトを作る",
    children: [
      { href: "/building-website/getting-started", label: "始め方" },
      { href: "/building-website/todo-app", label: "ToDoアプリ実践" },
      { href: "/building-website/advanced-apps", label: "複雑なアプリ" },
      { href: "/building-website/troubleshooting", label: "トラブルシューティング" },
    ],
  },
  {
    href: "/prompting",
    label: "プロンプトエンジニアリング",
    children: [
      { href: "/prompting/principles", label: "基本原則" },
      { href: "/prompting/patterns", label: "パターン集" },
      { href: "/prompting/practice", label: "練習場" },
    ],
  },
  {
    href: "/worktree",
    label: "Git Worktree",
    children: [
      { href: "/worktree/basics", label: "基本操作" },
      { href: "/worktree/multi-agent", label: "マルチエージェント" },
    ],
  },
  {
    href: "/copilot-features",
    label: "Copilotの特徴",
    children: [
      { href: "/copilot-features", label: "Copilotとは" },
      { href: "/image-generation-tips", label: "画像生成Tips" },
    ],
  },
  { href: "/vibecording", label: "Vibecoding: 雰囲気コーディング" },
  { href: "/risks", label: "リスクと注意点" },
  { href: "/workflow", label: "実践的な開発フロー" },
  { href: "/best-practices", label: "ベストプラクティス" },
  { href: "/resources", label: "リソース" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-foreground/10 bg-background/40 p-4">
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <div key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-foreground/10 text-foreground"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
            {link.children && (
              <div className="mt-1 space-y-1 pl-4">
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "block rounded-md px-3 py-1.5 text-sm transition-colors",
                      pathname === child.href
                        ? "bg-foreground/10 text-foreground"
                        : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}


