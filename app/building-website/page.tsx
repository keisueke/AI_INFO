import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function BuildingWebsitePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>生成AIでWebサイトを作る</h1>
        
        <p>
          ここでは、GitHub Copilotを使って実際にWebアプリケーションを構築する方法を学びます。
          理論だけでなく、実践を通じてAIとの開発を体験しましょう。
        </p>

        <h2>プロジェクトの始め方</h2>
        
        <h3>1. 要件定義をAIと対話しながら行う</h3>
        <p>
          まず、作りたいアプリケーションの要件を明確にします。
          Copilot Chatを使うと、対話形式で要件を整理できます。
        </p>

        <CodeBlock code={`# Copilot Chat での対話例

あなた: 「Todoアプリを作りたい。必要な機能は？」
Copilot: 「Todoアプリに必要な主な機能は:
1. タスクの追加
2. タスクの完了/未完了の切り替え
3. タスクの削除
4. フィルター機能（全て/未完了/完了済み）

他に必要な機能はありますか？」`} />

        <h3>2. 技術スタックの選定</h3>
        <p>
          要件に応じて、適切な技術スタックを選定します。
        </p>

        <CodeBlock code={`あなた: 「React と TypeScript で作る場合、どんな構成が良い？」
Copilot: 「推奨構成:
- React 18+ with TypeScript
- Next.js 14 (App Router)
- Tailwind CSS (スタイリング)
- Zustand or React Context (状態管理)
- Zod (バリデーション)

この構成で良いですか？」`} />

        <CopilotTip>
          プロジェクト全体の構造をコメントで書いてから実装を始めると、
          Copilotが全体的な設計を理解して、より一貫性のあるコードを生成できます。
          
          <CodeBlock code={`// TODO: アプリケーション構造
// - App.tsx: メインコンポーネント
// - components/TodoList.tsx: タスクリスト表示
// - components/TodoItem.tsx: 個別タスク
// - components/AddTodoForm.tsx: タスク追加フォーム
// - hooks/useTodos.ts: タスク管理ロジック
// - types/todo.ts: 型定義`} />
        </CopilotTip>

        <h2>実践: ToDoアプリを作る</h2>
        
        <p>
          ステップバイステップで、Copilotを使ってToDoアプリを構築します。
          各ステップで、効果的なプロンプトの書き方を学びます。
        </p>

        <div className="my-8 grid gap-4 md:grid-cols-2">
          <Link href="/building-website/getting-started">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">プロジェクトの始め方</h3>
              <p className="text-sm text-muted-foreground">
                環境構築から初期設定まで
              </p>
            </div>
          </Link>

          <Link href="/building-website/todo-app">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">ToDoアプリ実践</h3>
              <p className="text-sm text-muted-foreground">
                ステップバイステップで構築
              </p>
            </div>
          </Link>

          <Link href="/building-website/advanced-apps">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">複雑なアプリ</h3>
              <p className="text-sm text-muted-foreground">
                API、認証、データベース連携
              </p>
            </div>
          </Link>

          <Link href="/building-website/troubleshooting">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">トラブルシューティング</h3>
              <p className="text-sm text-muted-foreground">
                よくある問題と解決法
              </p>
            </div>
          </Link>
        </div>

        <div className="my-8 flex gap-4">
          <Link href="/basics">
            <Button variant="ghost">← 基礎に戻る</Button>
          </Link>
          <Link href="/prompting">
            <Button>次: プロンプトエンジニアリング →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


