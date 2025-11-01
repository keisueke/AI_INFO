import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>リソース</h1>
        
        <p>
          生成AIを活用したWeb開発を学ぶための参考資料をまとめました。
        </p>

        <h2>公式ドキュメント</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold">GitHub Copilot</h3>
            <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://docs.github.com/en/copilot
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold">Cursor</h3>
            <a href="https://cursor.sh/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://cursor.sh/docs
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold">OpenAI API</h3>
            <a href="https://platform.openai.com/docs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://platform.openai.com/docs
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold">Anthropic Claude</h3>
            <a href="https://docs.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://docs.anthropic.com
            </a>
          </div>
        </div>

        <h2>参考書籍</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">プロンプトエンジニアリング入門</h3>
            <p className="text-sm text-muted-foreground">
              効果的なプロンプトの書き方を学ぶ本
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">AI時代のプログラミング</h3>
            <p className="text-sm text-muted-foreground">
              Copilotや生成AIを活用した開発手法
            </p>
          </div>
        </div>

        <h2>オンラインコース</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">GitHub Skills: Copilot</h3>
            <p className="text-sm text-muted-foreground">
              無料のインタラクティブコース
            </p>
          </div>
        </div>

        <h2>コミュニティ</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">GitHub Discussions</h3>
            <p className="text-sm text-muted-foreground">
              Copilotユーザー同士の交流
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">Reddit r/Copilot</h3>
            <p className="text-sm text-muted-foreground">
              コミュニティでの最新情報やTips
            </p>
          </div>
        </div>

        <h2>用語集</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">トークン (Token)</h3>
            <p className="text-sm text-muted-foreground">
              AIが処理するテキストの最小単位。費用や制限に関わる。
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">コンテキストウィンドウ (Context Window)</h3>
            <p className="text-sm text-muted-foreground">
              AIが一度に処理できる情報の量の上限。
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">ハルシネーション (Hallucination)</h3>
            <p className="text-sm text-muted-foreground">
              AIが自信を持って間違った情報を生成する現象。
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">プロンプトエンジニアリング (Prompt Engineering)</h3>
            <p className="text-sm text-muted-foreground">
              効果的な指示の書き方を工夫する技術。
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">Vibecording</h3>
            <p className="text-sm text-muted-foreground">
              音声入力を使ってコードを書く技術。
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">Git Worktree</h3>
            <p className="text-sm text-muted-foreground">
              1つのリポジトリから複数のブランチを並行して作業できるGitの機能。
            </p>
          </div>
        </div>

        <h2>ツールと拡張機能</h2>

        <div className="my-6 space-y-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-1 font-semibold">VS Code拡張</h3>
            <ul className="ml-4 text-sm">
              <li>GitHub Copilot</li>
              <li>GitHub Copilot Chat</li>
              <li>Cursor</li>
            </ul>
          </div>
        </div>

        <div className="my-8 flex gap-4">
          <Link href="/risks">
            <Button variant="ghost">← リスクと注意点に戻る</Button>
          </Link>
          <Link href="/">
            <Button>トップに戻る</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


