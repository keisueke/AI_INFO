import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function PromptingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>効果的なプロンプトエンジニアリング</h1>
        
        <p>
          プロンプトの書き方次第で、生成AIから得られる結果の質は大きく変わります。
          ここでは、効果的なプロンプトの書き方とパターンを学びます。
        </p>

        <h2>プロンプトの基本原則</h2>

        <h3>1. 明確性</h3>
        <p>具体的で曖昧さのない指示を心がけましょう。</p>
        
        <CodeBlock code={`❌ 悪い例: 「良いコードを書いて」
✅ 良い例: 「バリデーション関数を作成。emailは@を含むこと、passwordは8文字以上」`} />

        <h3>2. 文脈の提供</h3>
        <p>必要な背景情報を提供しましょう。</p>
        
        <CodeBlock code={`❌ 悪い例: 「修正して」
✅ 良い例: 「この関数のパフォーマンスを改善して。現在O(n²)、目標はO(n)」`} />

        <h3>3. 制約の明示</h3>
        <p>出力形式、長さ、スタイルなどを明示しましょう。</p>
        
        <CodeBlock code={`✅ 良い例: 「TypeScriptで、Zodを使って、簡潔なコードで書いて」
✅ 良い例: 「20行以内で、再帰を使わずに実装して」`} />

        <h3>4. 段階的な指示</h3>
        <p>複雑なタスクは小さく分解しましょう。</p>
        
        <CodeBlock code={`✅ 良い例:
// 1. まずデータモデルを定義
// 2. 次にAPIエンドポイントを作成
// 3. 最後にフロントエンドを実装`} />

        <CopilotTip>
          インラインコメントとCopilot Chatの使い分け:
          <ul className="ml-4 mt-2">
            <li><strong>インラインコメント</strong>: 短いコード補完、次の行の生成</li>
            <li><strong>Copilot Chat</strong>: 詳細な議論、リファクタリングの相談、問題解決</li>
          </ul>
        </CopilotTip>

        <h2>プロンプトパターン集</h2>

        <p>
          各パターンに対して、悪い例・良い例・改善ポイントを示します。
        </p>

        <div className="my-8 grid gap-6 md:grid-cols-2">
          <Link href="/prompting/principles">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">基本原則</h3>
              <p className="text-sm text-muted-foreground">
                プロンプトの基礎から学ぶ
              </p>
            </div>
          </Link>

          <Link href="/prompting/patterns">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">パターン集</h3>
              <p className="text-sm text-muted-foreground">
                実用的なプロンプト例
              </p>
            </div>
          </Link>

          <Link href="/prompting/practice">
            <div className="rounded-lg border border-border bg-card p-6 hover:bg-accent/50 transition-colors">
              <h3 className="mb-2 text-lg font-semibold">練習場</h3>
              <p className="text-sm text-muted-foreground">
                実際に試してみる
              </p>
            </div>
          </Link>
        </div>

        <h2>実践例</h2>

        <h3>パターン1: コード生成</h3>
        <CodeBlock code={`❌ 悪い例:
「APIクライアントを作って」

✅ 良い例:
「fetch APIを使って、エラーハンドリング付きの
  APIクライアントを作成。TypeScriptで型安全に。
  - 自動リトライ機能
  - タイムアウト設定
  - エラーログ出力」`} />

        <h3>パターン2: リファクタリング</h3>
        <CodeBlock code={`❌ 悪い例:
「このコードを直して」

✅ 良い例:
「このコンポーネントをリファクタリング。
  目的: 可読性向上と再利用性向上
  - カスタムフックにロジックを分離
  - propsを最小限に
  - TypeScriptの型を強化」`} />

        <div className="my-8 flex gap-4">
          <Link href="/building-website">
            <Button variant="ghost">← Webサイトを作るに戻る</Button>
          </Link>
          <Link href="/prompting/patterns">
            <Button>次: パターン集を詳しく →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


