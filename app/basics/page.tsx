import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function BasicsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>生成AIの基礎</h1>
        
        <p>
          生成AI（Generative AI）は、人間の指示に基づいて新しいコンテンツを生成する人工知能の一種です。
          Webアプリケーション開発において、GitHub CopilotやChatGPTのような生成AIツールは、
          コード生成、リファクタリング、バグ修正などを支援してくれます。
        </p>

        <h2>生成AIとは</h2>
        
        <p>
          生成AIは、大規模なデータセットで訓練された機械学習モデル（特にLarge Language Model, LLM）を使用して、
          テキスト、コード、画像などの新しいコンテンツを生成します。
        </p>

        <h3>従来のAIとの違い</h3>
        <ul>
          <li>
            <strong>従来のAI</strong>: 特定のタスクに特化（画像認識、翻訳など）
          </li>
          <li>
            <strong>生成AI</strong>: 多様なタスクに対応（コード生成、文章作成、質問応答など）
          </li>
        </ul>

        <h3>主要な生成AIモデル</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full divide-y divide-border border border-border rounded-lg">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left text-sm font-semibold">モデル</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">特徴</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">利用シーン</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-4 py-3 text-sm">GPT-4</td>
                <td className="px-4 py-3 text-sm">汎用性が高い、コード生成が得意</td>
                <td className="px-4 py-3 text-sm">コード生成、ドキュメント作成</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 text-sm">Claude</td>
                <td className="px-4 py-3 text-sm">長いコンテキスト、安全性重視</td>
                <td className="px-4 py-3 text-sm">詳細な分析、コードレビュー</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Gemini</td>
                <td className="px-4 py-3 text-sm">マルチモーダル、Google統合</td>
                <td className="px-4 py-3 text-sm">Googleサービス連携</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="px-4 py-3 text-sm">GitHub Copilot</td>
                <td className="px-4 py-3 text-sm">IDE統合、リアルタイム補完</td>
                <td className="px-4 py-3 text-sm">開発中の補完、コード生成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CopilotTip>
          コメントを使ってAIに質問してみましょう。「// この関数は何をしている？」というコメントを追加して、
          Copilotに説明を求めると、コードの理解が深まります。
        </CopilotTip>

        <h2>生成AIの仕組み</h2>
        <p>
          生成AIの背後にある技術を理解することで、より効果的に活用できます。
        </p>

        <h3>トークン化とは</h3>
        <p>
          生成AIは、テキストを「トークン」という小さな単位に分解して処理します。
          日本語では1文字が約1-2トークン、英語では1単語が約0.75トークンです。
        </p>

        <h3>コンテキストウィンドウ</h3>
        <p>
          AIが同時に把握できる情報の量には限界があります。これを「コンテキストウィンドウ」と呼びます。
          Copilotのコンテキストウィンドウは、開いているファイルや最近の編集履歴を含みます。
        </p>

        <CopilotTip>
          長いコードを書く際は、ファイルを分割するか、重要な部分にコメントで構造を明示すると、
          Copilotがより正確にコンテキストを理解できます。
        </CopilotTip>

        <TryItOut>
          意図的に曖昧なプロンプトをCopilotに出してみましょう。
          例えば「良いコードを書いて」だけだと、Copilotはどのようなコードを期待されているか判断できません。
          具体的な要求（「バリデーション関数を作成」など）を出すことで、より有用な結果が得られます。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/basics/how-it-works">
            <Button>詳細: 仕組み</Button>
          </Link>
          <Link href="/basics/capabilities">
            <Button variant="outline">詳細: 能力と限界</Button>
          </Link>
        </div>

        <div className="my-8 flex gap-4">
          <Link href="/">
            <Button variant="ghost">← トップに戻る</Button>
          </Link>
          <Link href="/building-website">
            <Button>次: Webサイトを作る →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


