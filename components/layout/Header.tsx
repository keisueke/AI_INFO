import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-foreground/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">AI Learning</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/basics">
            <Button variant="ghost" size="sm">
              基礎
            </Button>
          </Link>
          <Link href="/building-website">
            <Button variant="ghost" size="sm">
              Webサイトを作る
            </Button>
          </Link>
          <Link href="/prompting">
            <Button variant="ghost" size="sm">
              プロンプト
            </Button>
          </Link>
          <Link href="/worktree">
            <Button variant="ghost" size="sm">
              Worktree
            </Button>
          </Link>
          <Link href="/risks">
            <Button variant="ghost" size="sm">
              リスク
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}


