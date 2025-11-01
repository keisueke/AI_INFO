import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              生成AIでWebアプリ開発を
              <br />
              学びませんか？
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              GitHub Copilotを活用して、実践的なWebアプリケーション開発を学ぶ
              学習サイトへようこそ。基礎から実践まで、ステップバイステップで学べます。
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/basics">
                <Button size="lg">学習を始める</Button>
              </Link>
              <Link href="/building-website">
                <Button variant="outline" size="lg">
                  すぐに実践する
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold">基礎を学ぶ</h2>
              <p className="mb-4 text-muted-foreground">
                生成AIの仕組み、LLMの能力と限界、基本的な使い方を理解しましょう。
              </p>
              <Link href="/basics">
                <Button variant="ghost" size="sm">
                  基礎を学ぶ →
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold">実践する</h2>
              <p className="mb-4 text-muted-foreground">
                実際にWebアプリケーションを構築しながら、AIとの付き合い方を身につけます。
              </p>
              <Link href="/building-website">
                <Button variant="ghost" size="sm">
                  実践する →
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold">プロンプトを学ぶ</h2>
              <p className="mb-4 text-muted-foreground">
                効果的なプロンプトの書き方、パターン集、実践的な使い方を習得します。
              </p>
              <Link href="/prompting">
                <Button variant="ghost" size="sm">
                  プロンプトを学ぶ →
                </Button>
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold">リスクを理解する</h2>
              <p className="mb-4 text-muted-foreground">
                生成AIを使う上でのリスクと注意点、ベストプラクティスを学びます。
              </p>
              <Link href="/risks">
                <Button variant="ghost" size="sm">
                  リスクを理解する →
                </Button>
              </Link>
            </div>
          </div>

          {/* Learning Path */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-bold">学習パス</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">生成AIの基礎</h3>
                  <p className="text-sm text-muted-foreground">
                    生成AIとは何か、仕組み、能力と限界を理解する
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Webサイトを作る</h3>
                  <p className="text-sm text-muted-foreground">
                    ToDoアプリを実際に作りながら、AIとの開発を体験する
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">プロンプトエンジニアリング</h3>
                  <p className="text-sm text-muted-foreground">
                    効果的なプロンプトの書き方を学ぶ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">高度なテクニック</h3>
                  <p className="text-sm text-muted-foreground">
                    Git Worktree、マルチエージェント開発などを学ぶ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold">リスクと注意点</h3>
                  <p className="text-sm text-muted-foreground">
                    セキュリティ、コード品質、倫理的問題を理解する
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
