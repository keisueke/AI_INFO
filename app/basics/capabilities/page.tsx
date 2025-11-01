import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"

export default function CapabilitiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>LLMの能力と限界</h1>
        
        <p>
          生成AIは非常に強力ですが、完璧ではありません。
          その能力と限界を理解することで、適切な期待値を持って活用できます。
        </p>

        <h2>得意なタスク</h2>
        
        <h3>✅ コード生成</h3>
        <ul>
          <li>一般的な機能の実装</li>
          <li>ボイラープレートコード</li>
          <li>ユーティリティ関数</li>
          <li>APIクライアント</li>
        </ul>

        <h3>✅ リファクタリング</h3>
        <ul>
          <li>コードの整理</li>
          <li>命名規則の統一</li>
          <li>DRY原則の適用</li>
        </ul>

        <h3>✅ ドキュメント作成</h3>
        <ul>
          <li>関数の説明</li>
          <li>README作成</li>
          <li>コメント追加</li>
        </ul>

        <h3>✅ テストコード生成</h3>
        <ul>
          <li>ユニットテスト</li>
          <li>エッジケースの発見</li>
        </ul>

        <h2>苦手なタスク</h2>

        <h3>❌ 最新の情報が必要なタスク</h3>
        <p>
          生成AIの知識には「カットオフ日」があります。
          GPT-4の場合、2023年4月までの情報しか知らないことがあります。
        </p>

        <h3>❌ 企業固有のビジネスロジック</h3>
        <p>
          会社独自のルールや業務フローは、訓練データに含まれていないため、
          正確に理解することができません。
        </p>

        <h3>❌ 大規模な設計判断</h3>
        <p>
          アーキテクチャの意思決定、プロジェクト全体の方向性など、
          人間の判断が不可欠な領域では限界があります。
        </p>

        <h2>ハルシネーション（幻覚）</h2>
        <p>
          「ハルシネーション」とは、AIが自信を持って間違った情報を生成する現象です。
          これは生成AIの最大の弱点の一つです。
        </p>

        <h3>ハルシネーションの例</h3>
        <ul>
          <li>存在しないAPIメソッドを生成</li>
          <li>間違ったライブラリの使い方</li>
          <li>架空の設定オプション</li>
          <li>古い記法の使用（非推奨APIなど）</li>
        </ul>

        <CopilotTip>
          生成されたコードは常に検証しましょう。
          特にエラーメッセージをコメントに貼り付けてCopilotに確認すると、
          より正確な修正が得られます。
        </CopilotTip>

        <h2>知識のカットオフ日</h2>
        <p>
          各生成AIモデルには、訓練データの最新日付（カットオフ日）があります。
          それ以降に発表された技術や変更は反映されていない可能性があります。
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-border border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-sm font-semibold">モデル</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">カットオフ日</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-sm">GPT-4</td>
                <td className="px-4 py-3 text-sm">2023年4月（場合による）</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 text-sm">Claude 3</td>
                <td className="px-4 py-3 text-sm">2023年8月</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Copilot</td>
                <td className="px-4 py-3 text-sm">継続的に更新</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TryItOut>
          Copilotに意図的に曖昧な指示を出してみましょう。
          「良いコードを書いて」だけだと、Copilotは何を作るべきか分かりません。
          具体的な要求（例：「バリデーション関数を作成、Zodを使用、エラーメッセージは日本語」）
          を出すことで、より有用な結果が得られます。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/basics">
            <Button variant="ghost">← 基礎に戻る</Button>
          </Link>
          <Link href="/building-website">
            <Button>次: Webサイトを作る →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


