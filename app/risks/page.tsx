import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"
import TableOfContents from "@/components/content/TableOfContents"

export default function RisksPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      <article className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none">
        <h1>生成AIのリスクと注意点</h1>
        
        <p>
          生成AIは非常に便利なツールですが、適切に使いこなすためには
          そのリスクと限界を理解することが重要です。
          ここでは、実際に起こり得る問題と対策を学びます。
        </p>

        <TableOfContents />

        <h2>セキュリティリスク</h2>

        <h3>機密情報の漏洩リスク</h3>
        <p>
          生成AIに送信したコードや情報は、サービス提供者に送信され、
          場合によっては訓練データとして使用される可能性があります。
        </p>

        <CodeBlock code={`❌ 危険な例:
// Copilot Chatに投稿
const API_KEY = "sk_live_51ABC123..."
const DB_PASSWORD = "mySecretPassword123"

✅ 安全な例:
// 環境変数を使う
const API_KEY = process.env.API_KEY
const DB_PASSWORD = process.env.DB_PASSWORD`} />

        <CopilotTip>
          機密情報を含むコードを扱う時の注意点:
          <ul className="ml-4 mt-2">
            <li>APIキー、パスワード、秘密鍵をコードに直書きしない</li>
            <li>環境変数やシークレット管理システムを使用</li>
            <li>プロンプトに機密情報を含めない</li>
            <li>企業のポリシーを確認してから利用</li>
          </ul>
        </CopilotTip>

        <h3>実際の事例</h3>
        <div className="my-6 rounded-lg border border-red-500/30 bg-red-50 p-4 dark:border-red-400/30 dark:bg-red-950/20">
          <p className="text-sm">
            <strong>注意:</strong> ある開発者がサポートフォーラムにコードを投稿したところ、
            コード内に含まれていた機密キーが公開されてしまい、
            第三者がAPIにアクセスできる状態になってしまった事例があります。
          </p>
        </div>

        <h2>コード品質のリスク</h2>

        <h3>古いパターンや非推奨APIの使用</h3>
        <p>
          生成AIは訓練データに基づいてコードを生成するため、
          古い記法や非推奨のAPIを含む可能性があります。
        </p>

        <CodeBlock code={`// 生成AIが作ったコード（古い記法）
componentWillMount() {
  // このライフサイクルメソッドはReact 16.3で非推奨
}

// 正しい記法
useEffect(() => {
  // 代替手段
}, [])`} />

        <h3>セキュリティ脆弱性のあるコード</h3>
        <CodeBlock code={`❌ 危険なコード:
// SQLインジェクション脆弱性
const query = "SELECT * FROM users WHERE name = '" + userInput + "'"

✅ 安全なコード:
// パラメータ化クエリを使用
const query = "SELECT * FROM users WHERE name = ?"
db.query(query, [userInput])`} />

        <h2>過信の危険性</h2>

        <h3>ハルシネーションの実例</h3>
        <CodeBlock code={`// AIが生成したコード（存在しないメソッド）
const result = array.flattenDeep()  // ❌ JavaScriptのArrayにはこのメソッドはない

// 正しいコード
import { flattenDeep } from 'lodash'
const result = flattenDeep(array)  // ✅`} />

        <CopilotTip>
          生成されたコードは常に検証しましょう:
          <ul className="ml-4 mt-2">
            <li>リファレンスドキュメントを確認</li>
            <li>実際にコードを実行してテスト</li>
            <li>コードレビューを実施</li>
            <li>静的解析ツールを使用</li>
          </ul>
        </CopilotTip>

        <h3>人間の判断が必要な場面</h3>
        <ul>
          <li>ビジネスロジックの意思決定</li>
          <li>アーキテクチャの設計判断</li>
          <li>ユーザー体験に関する判断</li>
          <li>セキュリティが重要な部分</li>
        </ul>

        <h2>倫理的・法的問題</h2>

        <h3>著作権とライセンス</h3>
        <p>
          生成AIが訓練に使用したコードのライセンスが、
          生成されたコードに影響する可能性があります。
        </p>

        <ul>
          <li>コピーレフトライセンス（GPL等）のコードが含まれる可能性</li>
          <li>企業の知的財産権ポリシーとの整合性</li>
          <li>生成コードの帰属をどう扱うか</li>
        </ul>

        <h2>検証の重要性</h2>

        <p>
          生成AIが作ったコードは、必ず人間が検証する必要があります。
          以下のチェックリストを使いましょう：
        </p>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-4 font-semibold">コードレビューチェックリスト</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>機密情報が含まれていないか</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>セキュリティ脆弱性がないか</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>最新のベストプラクティスに従っているか</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>パフォーマンス上の問題はないか</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>テストが適切に書かれているか</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">☑️</span>
              <span>エラーハンドリングが適切か</span>
            </li>
          </ul>
        </div>

        <TryItOut>
          AIが生成したコードのセキュリティチェックリストを作成してみましょう。
          あなたのプロジェクトでよくある問題や注意点を洗い出し、
          チームで共有できるチェックリストを作成します。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/worktree">
            <Button variant="ghost">← Worktreeに戻る</Button>
          </Link>
          <Link href="/resources">
            <Button>次: リソース →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}

