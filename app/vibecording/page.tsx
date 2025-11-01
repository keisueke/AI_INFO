import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"

export default function VibecordingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>Vibecording: 音声駆動開発</h1>
        
        <p>
          Vibecording（Vibe Recording）とは、音声入力を使ってコードを書く技術です。
          GitHub Copilotと音声入力を組み合わせることで、
          より直感的な開発体験が可能になります。
        </p>

        <h2>Vibecording とは</h2>
        
        <p>
          キーボードではなく、音声でコードの意図を伝えながら開発する手法です。
          特に複雑なロジックを説明したり、大きな構造を一気に定義したりする際に有効です。
        </p>

        <h3>従来の開発手法との違い</h3>
        <ul>
          <li><strong>従来</strong>: キーボードで1行ずつコードを書く</li>
          <li><strong>Vibecording</strong>: 音声で全体像を説明してから、AIに実装してもらう</li>
        </ul>

        <h3>適したシーンと適さないシーン</h3>

        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-green-500/30 bg-green-50 p-4 dark:border-green-400/30 dark:bg-green-950/20">
            <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
              ✅ 適したシーン
            </h4>
            <ul className="ml-4 mt-2 text-sm text-green-800 dark:text-green-200">
              <li>大きな機能の初期実装</li>
              <li>複雑なロジックの説明</li>
              <li>プロジェクトの全体像を伝える</li>
              <li>ドキュメントの作成</li>
            </ul>
          </div>

          <div className="rounded-lg border border-yellow-500/30 bg-yellow-50 p-4 dark:border-yellow-400/30 dark:bg-yellow-950/20">
            <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
              ⚠️ 適さないシーン
            </h4>
            <ul className="ml-4 mt-2 text-sm text-yellow-800 dark:text-yellow-200">
              <li>細かな微調整が必要な場合</li>
              <li>正確な変数名や関数名が必要</li>
              <li>音声認識が苦手な専門用語が多い</li>
              <li>静かな環境で作業できない場合</li>
            </ul>
          </div>
        </div>

        <CopilotTip>
          音声入力とCopilotの組み合わせ:
          まず音声で大まかな構造を説明してから、
          Copilotを使って詳細を補完すると効率的です。
        </CopilotTip>

        <h2>実践時の注意点</h2>

        <h3>1. 明確な発音とペース</h3>
        <p>
          技術用語を正確に発音し、適度なペースで話すことが重要です。
          急ぐと音声認識の精度が下がります。
        </p>

        <h3>2. 技術用語の正確な発音</h3>
        <p>
          以下のような単語は、正確な発音を意識しましょう：
        </p>
        <ul>
          <li><code>useState</code>: 「ユーズステート」</li>
          <li><code>TypeScript</code>: 「タイプスクリプト」</li>
          <li><code>async/await</code>: 「アシンク・アウェイト」</li>
        </ul>

        <h3>3. コンテキストの事前設定</h3>
        <p>
          音声入力の前に、簡単なコメントで状況を説明しておくと、
          より正確な結果が得られます。
        </p>

        <h3>4. 音声認識の限界を理解する</h3>
        <p>
          音声認識は完璧ではありません。特に：
        </p>
        <ul>
          <li>混同しやすい単語（例: 「for」と「four」）</li>
          <li>記号の認識（例: `===` が「イコールイコールイコール」となる）</li>
          <li>長い文字列の入力</li>
        </ul>

        <h3>5. ノイズ対策</h3>
        <p>
          マイクの品質、周囲の雑音、エコーの有無が精度に影響します。
          可能な限り静かな環境を選びましょう。
        </p>

        <h2>効果的な使い方</h2>

        <h3>コード説明時のベストプラクティス</h3>
        <p>
          音声入力で効果的にコードを説明するには、構造化された説明が重要です。
        </p>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">良い説明の例</h4>
          <p className="mb-3 text-sm">
            「ユーザー登録フォームを作成。名前、メール、パスワードの3つの入力フィールド。
            バリデーション機能付き。エラーがあれば赤色で表示。送信ボタンはフッターに配置。」
          </p>
          <h4 className="mb-3 font-semibold">悪い説明の例</h4>
          <p className="text-sm">
            「フォーム作って。何か入力できて、エラーが出る感じで。適当に」
          </p>
        </div>

        <h3>複雑なロジックの口頭説明テクニック</h3>
        <ol>
          <li><strong>全体像を先に</strong>: まず何を作るかを説明</li>
          <li><strong>詳細を追加</strong>: 段階的に詳細を加える</li>
          <li><strong>具体例を挙げる</strong>: 実際の値やケースを提示</li>
          <li><strong>確認する</strong>: 生成されたコードをレビュー</li>
        </ol>

        <CopilotTip>
          音声で大まかな構造を説明してから、Copilotで詳細を補完する方法:
          <ol className="ml-4 mt-2 text-sm">
            <li>音声で「API呼び出しの関数を作成」と説明</li>
            <li>Copilotが補完候補を提示</li>
            <li>必要に応じて音声で追加指示</li>
            <li>最後にキーボードで微調整</li>
          </ol>
        </CopilotTip>

        <TryItOut>
          音声入力で簡単な関数を作成してみましょう。
          <ol className="ml-4 mt-2">
            <li>新しいTypeScriptファイルを作成</li>
            <li>音声入力で「配列の合計を求める関数。数値の配列を受け取って、合計を返す。エラーハンドリング付き」と説明</li>
            <li>生成されたコードを確認</li>
            <li>必要に応じて修正</li>
          </ol>
          この練習を通じて、音声入力の感覚を掴みましょう。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/">
            <Button variant="ghost">← トップに戻る</Button>
          </Link>
          <Link href="/resources">
            <Button>次: リソース →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


