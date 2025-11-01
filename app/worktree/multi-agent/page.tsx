import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function MultiAgentPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>マルチエージェント開発の実践</h1>
        
        <p>
          Git Worktreeを活用して、複数のAIエージェント（Copilot、Cursor等）を
          並行して利用し、生産性を最大化する方法を学びます。
        </p>

        <h2>なぜマルチエージェント開発なのか</h2>
        
        <p>
          各AIツールには得意・不得意があります。複数のツールを適切に組み合わせることで、
          より効率的な開発が可能になります。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-border border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-sm font-semibold">ツール</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">得意分野</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Worktreeでの活用</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-sm">GitHub Copilot</td>
                <td className="px-4 py-3 text-sm">リアルタイム補完、コード生成</td>
                <td className="px-4 py-3 text-sm">メイン機能の開発</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 text-sm">Cursor</td>
                <td className="px-4 py-3 text-sm">チャット形式での対話、リファクタリング</td>
                <td className="px-4 py-3 text-sm">設計検討、リファクタリング</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">ChatGPT/Claude</td>
                <td className="px-4 py-3 text-sm">戦略的な議論、ドキュメント作成</td>
                <td className="px-4 py-3 text-sm">アーキテクチャ設計、仕様策定</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>実践的なワークフロー</h2>

        <h3>シナリオ: 新機能開発と並行でリファクタリング</h3>

        <CodeBlock code={`# 1. メインのworktreeでリファクタリング作業
cd /path/to/repo
# Copilotを使って既存コードをリファクタリング
# - コンテキスト: 既存コード全体

# 2. feature-branchのworktreeを作成
git worktree add ../repo-feature-a feature-a

# 3. 新しいworktreeで機能開発
cd ../repo-feature-a
# Cursorで新しい機能を設計・実装
# - コンテキスト: 新機能のコードのみ

# 4. 両方の作業を同時に進行
# - メインworktree: リファクタリング継続
# - feature-a: 機能開発継続`} />

        <h3>具体的な使用例</h3>

        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="mb-2 font-semibold">Worktree 1: Copilotで新機能開発</h4>
            <CodeBlock code={`# /path/to/repo/user-management
# ユーザー管理機能を開発中

// Copilot Chat
あなた: 「ユーザー登録フォームを作成したい。
        要件:
        - 名前、メール、パスワード
        - バリデーション
        - エラーメッセージ表示」`} />
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="mb-2 font-semibold">Worktree 2: Cursorでリファクタリング</h4>
            <CodeBlock code={`# /path/to/../repo-refactor
# 既存のコードをリファクタリング中

// Cursor Chat
あなた: 「このコンポーネントを分割して、
        再利用性を高めたい。
        具体的な提案をして。」`} />
          </div>
        </div>

        <CopilotTip>
          各worktreeで異なるコンテキストを維持する方法:
          <ul className="ml-4 mt-2">
            <li>各ディレクトリで異なるファイルセットを開く</li>
            <li>各worktreeで異なるCopilotセッションを使用</li>
            <li>作業ログやメモを別々に管理</li>
            <li>VSCodeのワークスペースを別々に設定</li>
          </ul>
        </CopilotTip>

        <h2>実践例: 並行作業の実際</h2>

        <h3>タイムライン</h3>
        <div className="my-6 space-y-3">
          <div className="flex items-start gap-3 border-l-4 border-blue-500 pl-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">
              T1
            </div>
            <div>
              <strong>メインworktree</strong>: 既存コードの分析開始
              <br />
              <strong>feature-branch</strong>: 新機能の要件定義開始
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-4 border-green-500 pl-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
              T2
            </div>
            <div>
              <strong>メインworktree</strong>: Copilotでリファクタリング実施
              <br />
              <strong>feature-branch</strong>: Cursorでアーキテクチャ設計
            </div>
          </div>
          <div className="flex items-start gap-3 border-l-4 border-purple-500 pl-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white text-xs font-bold">
              T3
            </div>
            <div>
              <strong>両方</strong>: コードレビュー、テスト作成
              <br />
              <strong>マージ</strong>: 両方の変更を統合
            </div>
          </div>
        </div>

        <h2>トラブルシューティング</h2>

        <h3>コンフリクトの管理</h3>
        <CodeBlock code={`# worktree間でコンフリクトが発生する場合
# 1. どちらを先にマージするか決める
# 2. 影響範囲を確認

# 例: メインで先行してマージ
cd /path/to/repo
git merge feature-a

# feature-bのworktreeを更新
cd ../repo-feature-b
git pull origin main`} />

        <h3>リソースの管理</h3>
        <ul>
          <li>必要以上のworktreeを作らない（通常は2-3個まで推奨）</li>
          <li>定期的に使わなくなったworktreeを削除</li>
          <li>各worktreeで異なるポート番号を使用（開発サーバーの場合）</li>
        </ul>

        <TryItOut>
          実際に2つのworktreeを作って、異なる機能を並行開発してみましょう。
          <ol className="ml-4 mt-2">
            <li>メインworktree: 既存のプロジェクトで小規模なリファクタリング</li>
            <li>新しいworktree: 新しい機能を追加</li>
            <li>両方の作業をCopilot、Cursor等で並行して進める</li>
            <li>マージして結果を確認</li>
          </ol>
          この実践を通じて、worktreeの利点を実感できます。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/worktree">
            <Button variant="ghost">← Worktreeに戻る</Button>
          </Link>
          <Link href="/prompting">
            <Button>次: プロンプトエンジニアリング →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


