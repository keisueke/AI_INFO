import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function WorktreePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Git Worktree を活用したマルチエージェント開発</h1>
        
        <p>
          Git Worktreeを使うことで、1つのリポジトリから複数のブランチを同時に作業できます。
          これにより、複数のAIエージェント（Copilot、Cursor等）を並行して活用し、
          生産性を大幅に向上させることができます。
        </p>

        <h2>Git Worktree とは</h2>
        
        <p>
          Worktreeは、1つのGitリポジトリに対して複数のワーキングディレクトリを作成できる機能です。
          ブランチを切り替える必要がなく、それぞれのディレクトリで独立して作業できます。
        </p>

        <h3>通常のブランチ切り替えとの違い</h3>

        <CodeBlock code={`# 通常のブランチ切り替え
git checkout feature-a    # feature-aで作業
git checkout feature-b    # feature-aの作業は一時停止

# Worktreeを使う場合
git worktree add ../worktree-feature-a feature-a
git worktree add ../worktree-feature-b feature-b

# 複数のディレクトリで同時に作業可能`} />

        <h3>メリットとユースケース</h3>
        <ul>
          <li><strong>同時並行開発</strong>: 複数の機能を同時に開発</li>
          <li><strong>コンテキストの維持</strong>: 各作業領域で異なるコンテキストを保持</li>
          <li><strong>比較検討</strong>: 異なる実装方法を並行して試す</li>
          <li><strong>マルチエージェント</strong>: 複数のAIツールを並行利用</li>
        </ul>

        <h2>Worktree の基本操作</h2>

        <h3>Worktree の作成</h3>
        <CodeBlock code={`# 新しいworktreeを作成
git worktree add <パス> <ブランチ名>

# 例: feature-branchブランチのworktreeを作成
git worktree add ../feature-branch feature-branch`} />

        <h3>Worktree の一覧表示</h3>
        <CodeBlock code={`# 全てのworktreeを確認
git worktree list

# 出力例:
# /path/to/repo          abc123 [main]
# /path/to/feature-branch def456 [feature-branch]`} />

        <h3>Worktree の削除</h3>
        <CodeBlock code={`# ディレクトリを削除してworktreeを破棄
git worktree remove <パス>

# 例:
git worktree remove ../feature-branch

# または、ディレクトリを削除してから
rm -rf ../feature-branch
git worktree prune  # 削除されたworktreeを整理`} />

        <h3>新しいブランチと一緒にworktreeを作成</h3>
        <CodeBlock code={`# 新しいブランチを作成しながらworktreeを追加
git worktree add -b new-feature ../new-feature

# この場合、new-featureブランチが作成される`} />

        <CopilotTip>
          各worktreeで異なるコンテキストを維持する方法:
          - 各ディレクトリで異なるファイルセットを開く
          - 各worktreeで異なるCopilotセッションを使用
          - 作業ログやメモを別々に管理
        </CopilotTip>

        <div className="my-8 grid gap-4 md:grid-cols-2">
          <Link href="/worktree/basics">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">基本操作詳細</h3>
              <p className="text-sm text-muted-foreground">
                実践的な使い方とTips
              </p>
            </div>
          </Link>

          <Link href="/worktree/multi-agent">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">マルチエージェント開発</h3>
              <p className="text-sm text-muted-foreground">
                Copilot、Cursor等の並行利用
              </p>
            </div>
          </Link>
        </div>

        <h2>図解: Worktreeの仕組み</h2>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <pre className="text-sm">
{`リポジトリ: /project

├── .git/                      # 共通のGitリポジトリ
│   ├── refs/
│   └── objects/
│
├── main/                      # メインのworktree (mainブランチ)
│   ├── src/
│   └── package.json
│
├── ../project-feature-a/      # 追加のworktree (feature-aブランチ)
│   ├── src/
│   └── package.json
│
└── ../project-feature-b/      # 追加のworktree (feature-bブランチ)
    ├── src/
    └── package.json

すべて同じ.gitディレクトリを共有し、
異なるブランチで同時に作業可能`}
          </pre>
        </div>

        <div className="my-8 flex gap-4">
          <Link href="/building-website">
            <Button variant="ghost">← Webサイトを作るに戻る</Button>
          </Link>
          <Link href="/worktree/multi-agent">
            <Button>次: マルチエージェント開発 →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


