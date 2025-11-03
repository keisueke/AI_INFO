import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"
import TableOfContents from "@/components/content/TableOfContents"

export default function CopilotFeaturesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      <article className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none">
        <h1>GitHub Copilotの特徴</h1>
        
        <p>
          GitHub Copilotは、AIを活用したコード補完ツールです。
          このページでは、Copilotの特徴や効果的な使い方を紹介します。
        </p>

        <TableOfContents />

        <h2>Copilotとは</h2>
        
        <p>
          GitHub Copilotは、OpenAIのGPTモデルをベースにしたAIアシスタントで、
          コードエディタ内でリアルタイムにコード補完を提供します。
          Visual Studio Code、JetBrains IDE、Neovimなど、主要なエディタで利用できます。
        </p>

        <h3>主な機能</h3>
        <ul>
          <li><strong>インライン補完</strong>: コードを書きながら、次の行や関数の提案を表示</li>
          <li><strong>Copilot Chat</strong>: チャット形式で質問やコード生成を依頼</li>
          <li><strong>コマンドパレット</strong>: エディタ内でコマンドを実行してCopilotを活用</li>
          <li><strong>コンテキスト理解</strong>: プロジェクト全体のコードベースを理解して提案</li>
        </ul>

        <h2>Copilotの特徴</h2>

        <h3>1. コンテキストを理解した提案</h3>
        <p>
          Copilotは、開いているファイルやプロジェクト全体のコンテキストを理解して、
          適切なコード提案を行います。関数名、変数名、コメントなどから、
          あなたが求めているコードを推測します。
        </p>

        <CodeBlock code={`// コメントで意図を説明すると、Copilotが提案してくれる
// ユーザー一覧を取得する関数を作成
// APIエンドポイント: /api/users
// エラーハンドリング付き

// Copilotが以下を提案:
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}`} />

        <CopilotTip>
          コメントで意図を明確に説明すると、Copilotの提案精度が大幅に向上します。
          何を作りたいかを自然言語で説明するだけで、Copilotがコードを生成してくれます。
        </CopilotTip>

        <h3>2. 複数行のコード生成</h3>
        <p>
          単一のトークンだけでなく、関数全体やクラス全体を一度に生成できます。
          適切なコメントや関数シグネチャを書くことで、Copilotが実装を提案します。
        </p>

        <h3>3. 複数言語のサポート</h3>
        <p>
          JavaScript、TypeScript、Python、Go、Rust、Javaなど、幅広いプログラミング言語に対応しています。
          プロジェクトで使用している言語に応じて、適切なコードスタイルで提案されます。
        </p>

        <h3>4. 学習機能</h3>
        <p>
          Copilotは、提案したコードを採用するか拒否するかのフィードバックから学習します。
          より頻繁に使用するほど、あなたのコーディングスタイルに合わせた提案をするようになります。
        </p>

        <h2>他のAIツールとの違い</h2>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">Copilot vs ChatGPT / Claude</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Copilot</strong>: エディタ内でリアルタイムに動作。コンテキストを自動的に理解。
            </li>
            <li>
              <strong>ChatGPT/Claude</strong>: チャット形式。プロジェクト全体の理解には明示的な説明が必要。
            </li>
          </ul>
        </div>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">Copilot vs Cursor / Cline</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>Copilot</strong>: シンプルで軽量。インライン補完が主な機能。
            </li>
            <li>
              <strong>Cursor/Cline</strong>: より高度な機能（コード編集、マルチファイル操作など）。
            </li>
          </ul>
        </div>

        <h2>効果的な使い方</h2>

        <h3>1. 明確なコメントを書く</h3>
        <p>
          コメントで意図を明確に説明すると、Copilotの提案精度が向上します。
        </p>

        <CodeBlock code={`❌ 悪い例:
// 関数を作る

✅ 良い例:
// ユーザーのメールアドレスを検証する関数
// - @を含むこと
// - ドメイン部分が存在すること
// - 長さが255文字以下であること`} />

        <h3>2. 関数シグネチャを先に書く</h3>
        <p>
          関数名、パラメータ、戻り値の型を先に定義すると、
          Copilotが適切な実装を提案してくれます。
        </p>

        <CodeBlock code={`function calculateTotalPrice(
  items: Array<{ price: number; quantity: number }>
): number {
  // Copilotが自動的に実装を提案
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`} />

        <h3>3. Copilot Chatを活用する</h3>
        <p>
          Copilot Chatを使って、コードの説明を求めたり、
          リファクタリングを依頼したりできます。
        </p>

        <TryItOut>
          Copilot Chatの使い方:
          <ol className="ml-4 mt-2">
            <li>エディタでコマンドパレットを開く（Cmd/Ctrl + Shift + P）</li>
            <li>「Copilot Chat」を選択</li>
            <li>質問や指示を入力（例: 「この関数の説明をして」）</li>
            <li>Copilotが回答やコードを提案</li>
          </ol>
        </TryItOut>

        <h3>4. ショートカットを覚える</h3>
        <ul>
          <li><strong>Tab</strong>: 提案を受け入れる</li>
          <li><strong>Esc</strong>: 提案を拒否</li>
          <li><strong>Alt + ] / Alt + [</strong>: 次の提案 / 前の提案（複数候補がある場合）</li>
          <li><strong>Cmd/Ctrl + Enter</strong>: Copilot Chatを開く</li>
        </ul>

        <h2>制約事項と注意点</h2>

        <div className="my-6 rounded-lg border border-yellow-500/50 bg-yellow-100/80 p-6 shadow-sm dark:border-yellow-400/60 dark:bg-yellow-950/70">
          <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
            ⚠️ 注意事項
          </h4>
          <ul className="ml-4 mt-2 space-y-2 text-sm text-yellow-900 dark:text-yellow-50">
            <li>生成されたコードは必ずレビューすること</li>
            <li>セキュリティやパフォーマンスを考慮した検証が必要</li>
            <li>ライセンスの問題に注意（公開コードの使用など）</li>
            <li>プロジェクトのコーディング規約に適合するか確認</li>
          </ul>
        </div>

        <CopilotTip>
          Copilotは完璧ではありません。生成されたコードは必ずレビューし、
          理解した上で使用することが重要です。特にセキュリティに関わるコードは
          慎重に確認してください。
        </CopilotTip>

        <h2>実践的なテクニック</h2>

        <h3>1. 型定義から始める</h3>
        <p>
          TypeScriptで開発する場合、型定義を先に書くと、
          Copilotが型に合った実装を提案してくれます。
        </p>

        <h3>2. テストを書く</h3>
        <p>
          テストケースを書くと、Copilotがそれに合った実装を提案します。
          テスト駆動開発（TDD）のアプローチでCopilotを活用できます。
        </p>

        <h3>3. 既存コードのパターンを利用</h3>
        <p>
          プロジェクト内の既存コードのパターンに合わせて提案されます。
          一貫性のあるコードベースを維持できます。
        </p>

        <div className="my-8 flex gap-4">
          <Link href="/">
            <Button variant="ghost">← トップに戻る</Button>
          </Link>
          <Link href="/image-generation-tips">
            <Button>次: 画像生成Tips →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}

