import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import TableOfContents from "@/components/content/TableOfContents"

export default function VibecordingPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      <article className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none">
        <h1>Vibecoding: 雰囲気コーディング</h1>
        
        <p>
          Vibecoding（雰囲気コーディング）とは、人間が音声やテキストで指示を出し、
          AIが主体となってコードを書くコーディングスタイルです。
          GitHub CopilotなどのAIアシスタントと人間が交互に作業を進める、
          新しい開発のアプローチです。
        </p>

        <TableOfContents />

        <h2>Vibecoding とは</h2>
        
        <p>
          Vibecodingは、Andrej Karpathyが提唱した概念で、
          AIと人間が交互にコードを書き足していく「振動（vibe）」のような開発スタイルです。
          人間が骨格や抽象を設計し、AIが一気に肉付けする。
          次に人間がリファクタや設計の修正を行い、再びAIがコードを生成する、
          この往復を繰り返すプロセスです。
        </p>

        <h3>従来の開発手法との違い</h3>
        <ul>
          <li><strong>従来</strong>: 人間が1行ずつキーボードでコードを書く</li>
          <li><strong>Vibecoding</strong>: 人間が要件・設計を指示し、AIが実装。人間がレビュー・修正し、再びAIが改善</li>
          <li><strong>ペアプログラミング</strong>: 人間同士での会話に基づく協業</li>
          <li><strong>Vibecoding</strong>: 人間の設計思考とAIの生成能力が交互に揺さぶり合う</li>
        </ul>
        
        <p className="my-4 italic text-gray-600 dark:text-gray-400">
          「設計は人間、実装はAI」というタッグマッチが自然に実現する、
          生成AI時代ならではの開発様式です。
        </p>

        <h3>Vibecodingの特徴</h3>
        
        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-green-500/50 bg-green-100/80 p-4 shadow-sm dark:border-green-400/60 dark:bg-green-950/70 dark:shadow-green-900/20">
            <h4 className="mb-2 font-semibold text-green-900 dark:text-green-100">
              ✅ Vibecodingが適しているシーン
            </h4>
            <ul className="ml-4 mt-2 text-sm text-green-900 dark:text-green-50">
              <li>プロトタイプやMVPの迅速な開発</li>
              <li>ボイラープレートコードの生成</li>
              <li>新しい技術の学習と実践</li>
              <li>繰り返しが多い実装タスク</li>
              <li>要件定義から実装までの一気通貫</li>
              <li>テストコードの生成</li>
            </ul>
          </div>

          <div className="rounded-lg border border-yellow-500/50 bg-yellow-100/80 p-4 shadow-sm dark:border-yellow-400/60 dark:bg-yellow-950/70 dark:shadow-yellow-900/20">
            <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
              ⚠️ 注意が必要なシーン
            </h4>
            <ul className="ml-4 mt-2 text-sm text-yellow-900 dark:text-yellow-50">
              <li>高度な最適化が必要な箇所</li>
              <li>セキュリティが極めて重要な処理</li>
              <li>既存システムとの細かな互換性調整</li>
              <li>パフォーマンスクリティカルな部分</li>
              <li>ビジネスロジックが複雑な領域</li>
            </ul>
          </div>
        </div>

        <CopilotTip>
          Vibecodingの基本フロー:
          <ol className="ml-4 mt-2 text-sm">
            <li>人間が要件・設計を明確に定義（テキストまたは音声）</li>
            <li>AIがコードを生成</li>
            <li>人間がレビュー・テスト・修正</li>
            <li>必要に応じてAIに追加指示</li>
            <li>このサイクルを繰り返す</li>
          </ol>
        </CopilotTip>

        <h2>Vibecodingの実践方法</h2>

        <h3>1. 要件定義から始める</h3>
        <p>
          まず「何を作るのか」「ターゲットは誰か」「どんな機能が必要か」などを明確にします。
          AIとチャットベースで対話しながら要件をまとめていきます。
          最初から完璧に考えきっていなくても、「◯◯なアプリ作りたいんだけど要件定義手伝ってー」から
          会話を始めれば、AIが必要な情報をヒアリングしてくれます。
        </p>

        <h3>2. 段階的な指示と実装</h3>
        <p>
          一度にすべてを実装しようとせず、段階的に指示を出しましょう：
        </p>
        <ul>
          <li><strong>ステップ1</strong>: 全体の構造・アーキテクチャを指示</li>
          <li><strong>ステップ2</strong>: 各コンポーネント・関数の詳細を指示</li>
          <li><strong>ステップ3</strong>: エラーハンドリングやエッジケースの対応</li>
          <li><strong>ステップ4</strong>: テストコードの追加</li>
        </ul>

        <h3>3. コンテキストの提供</h3>
        <p>
          AIがより良いコードを生成するために、以下を提供しましょう：
        </p>
        <ul>
          <li>使用している技術スタック（React、TypeScript、Next.jsなど）</li>
          <li>プロジェクトのディレクトリ構造</li>
          <li>既存のコードスタイルや規約</li>
          <li>外部APIやライブラリの情報</li>
        </ul>

        <h3>4. レビューとリファクタリング</h3>
        <p>
          AIが生成したコードは必ずレビューしましょう：
        </p>
        <ul>
          <li>ビジネスロジックが正しく実装されているか</li>
          <li>セキュリティ上の問題がないか</li>
          <li>パフォーマンスや可読性は適切か</li>
          <li>テストは十分か</li>
        </ul>
        <p>
          問題があれば、具体的な修正指示を出してAIに改善してもらいます。
        </p>

        <h3>5. 人間とAIの役割分担を明確に</h3>
        <p>
          Vibecodingでは以下のように役割を分担すると効率的です：
        </p>
        <ul>
          <li><strong>人間</strong>: 要件定義、設計、レビュー、テスト、デバッグ</li>
          <li><strong>AI</strong>: 実装コードの生成、ボイラープレートの作成、リファクタリング</li>
        </ul>

        <h2>効果的な指示の出し方</h2>

        <h3>良い指示と悪い指示</h3>
        <p>
          AIに効果的に指示を出すには、具体的で構造化された説明が重要です。
        </p>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">✅ 良い指示の例</h4>
          <div className="space-y-2 text-sm">
            <p className="font-medium">例1: コンポーネント作成</p>
            <p className="text-gray-700 dark:text-gray-300">
              「Reactでユーザー登録フォームコンポーネントを作成してください。
              名前、メール、パスワードの3つの入力フィールド。
              TypeScriptで型定義し、バリデーション機能付き。
              エラーメッセージは赤色で表示。送信ボタンはフッターに配置し、
              onSubmitでバリデーション後にAPIエンドポイント /api/register にPOSTリクエストを送信。」
            </p>
            <p className="font-medium mt-4">例2: API関数作成</p>
            <p className="text-gray-700 dark:text-gray-300">
              「fetchを使ったAPI呼び出し関数を作成。
              エラーハンドリング、リトライ機能、型安全なレスポンス処理を含める。
              Next.js 14のApp Router環境で使用。」
            </p>
          </div>
          <h4 className="mb-3 mt-4 font-semibold">❌ 悪い指示の例</h4>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700 dark:text-gray-300">
              「フォーム作って。何か入力できて、エラーが出る感じで。適当に」
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              「API呼び出しのコード書いて」
            </p>
          </div>
        </div>

        <h3>効果的な指示のコツ</h3>
        <ol>
          <li><strong>具体的な要件を明確に</strong>: 何を作るか、どんな機能が必要か</li>
          <li><strong>技術スタックを指定</strong>: 使用する言語、フレームワーク、ライブラリ</li>
          <li><strong>制約や要件を明記</strong>: パフォーマンス、セキュリティ、互換性</li>
          <li><strong>例や期待する動作を示す</strong>: 入力と出力の例</li>
          <li><strong>段階的に詳細化</strong>: まず全体像、次に詳細</li>
        </ol>

        <h3>生成AIが認識しやすい形式</h3>
        <p>
          AIに情報を伝える際は、構造化された形式を使用すると認識精度が向上します。
          以下の形式を優先的に使用しましょう：
        </p>
        
        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-blue-500/50 bg-blue-100/80 p-4 shadow-sm dark:border-blue-400/60 dark:bg-blue-950/70 dark:shadow-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
              ✅ 認識しやすい形式
            </h4>
            <ul className="ml-4 mt-2 space-y-2 text-sm text-blue-900 dark:text-blue-50">
              <li>
                <strong>マークダウン</strong>: 見出し、リスト、コードブロックなど構造化された形式
                <div className="mt-1 rounded bg-white/50 p-2 text-xs font-mono dark:bg-gray-900/50">
                  {`\`\`\`typescript
// コード例
\`\`\``}
                </div>
              </li>
              <li>
                <strong>コードブロック</strong>: 言語指定付きのコードブロック（```typescript、```jsonなど）
              </li>
              <li>
                <strong>構造化データ</strong>: JSON、YAML、XMLなどの形式化されたデータ
              </li>
              <li>
                <strong>テーブル形式</strong>: MarkdownテーブルやHTMLテーブル
              </li>
              <li>
                <strong>箇条書き</strong>: 番号付きリストや箇条書きリスト
              </li>
              <li>
                <strong>コメント形式</strong>: コード内のコメントとして記述
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-red-500/50 bg-red-100/80 p-4 shadow-sm dark:border-red-400/60 dark:bg-red-950/70 dark:shadow-red-900/20">
            <h4 className="mb-2 font-semibold text-red-900 dark:text-red-100">
              ❌ 認識しにくい形式
            </h4>
            <ul className="ml-4 mt-2 space-y-2 text-sm text-red-900 dark:text-red-50">
              <li>
                <strong>画像のみ</strong>: テキスト情報が画像に埋め込まれている場合（OCRが必要）
              </li>
              <li>
                <strong>手書きテキスト</strong>: 手書きのメモやスキャンした文書
              </li>
              <li>
                <strong>複雑なPDF</strong>: テーブルや図が多く、構造化されていないPDF
              </li>
              <li>
                <strong>長文の散文</strong>: 構造化されていない長い文章
              </li>
              <li>
                <strong>特殊な記号や絵文字</strong>: 多すぎる絵文字や装飾文字
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">実践例: 良い形式と悪い形式</h4>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium mb-2">✅ 良い例（マークダウン + コードブロック）</p>
              <div className="rounded bg-gray-100 p-3 font-mono text-xs dark:bg-gray-800">
                <pre className="whitespace-pre-wrap">{`## 要件定義

### 機能要件
- ユーザー登録フォーム
- バリデーション機能
- エラーハンドリング

### コード例
\`\`\`typescript
interface UserForm {
  name: string;
  email: string;
  password: string;
}
\`\`\``}</pre>
              </div>
            </div>
            <div>
              <p className="font-medium mb-2">❌ 悪い例（散文のみ）</p>
              <div className="rounded bg-gray-100 p-3 text-xs dark:bg-gray-800">
                ユーザー登録フォームを作りたいんだけど、名前とメールとパスワードがあって、バリデーションもしたいし、エラーもちゃんと処理したいから、TypeScriptで書いて、インターフェースも作って、いい感じにしてほしい。
              </div>
            </div>
          </div>
        </div>

        <CopilotTip>
          Copilotを使ったVibecodingの実践:
          <ol className="ml-4 mt-2 text-sm">
            <li>コメントで要件や設計を記述</li>
            <li>Copilotがコード補完を提案</li>
            <li>生成されたコードをレビュー</li>
            <li>必要に応じて追加のコメントで修正指示</li>
            <li>このサイクルでコードを完成させる</li>
          </ol>
        </CopilotTip>

        <TryItOut>
          Vibecodingの練習をしてみましょう。
          <ol className="ml-4 mt-2">
            <li>新しいプロジェクトまたはファイルを作成</li>
            <li>コメントやチャットで以下のように指示:
              <ul className="ml-4 mt-1">
                <li>「TypeScriptで配列の合計を求める関数を作成。数値の配列を受け取って、合計を返す。エラーハンドリング付きで、空配列の場合は0を返す。」</li>
              </ul>
            </li>
            <li>AI（CopilotやChatGPT）が生成したコードを確認</li>
            <li>テストを書いて動作を確認</li>
            <li>必要に応じて「エッジケースの処理を追加して」など追加指示</li>
            <li>コードをレビューして改善点があれば指示</li>
          </ol>
          この練習を通じて、AIとの協業の感覚を掴みましょう。
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


