import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { CodeBlock } from "@/components/content/CodeBlock"
import TableOfContents from "@/components/content/TableOfContents"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      <article className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none">
        <h1>生成AIの仕組み</h1>
        
        <p>
          生成AIがどのように動作するかを理解することで、
          より効果的にプロンプトを書いたり、生成されたコードを評価したりできるようになります。
        </p>

        <TableOfContents />

        <h2>トランスフォーマーアーキテクチャ</h2>
        <p>
          現在の主流の生成AI（GPT-4、Claude、Copilot等）は、
          「トランスフォーマー」と呼ばれるニューラルネットワークアーキテクチャを使用しています。
        </p>
        
        <h3>基本的な仕組み</h3>
        <ol>
          <li><strong>入力の処理</strong>: テキストやコードをトークンに分解</li>
          <li><strong>文脈の理解</strong>: 各トークンの関係性を分析</li>
          <li><strong>次のトークンの予測</strong>: 最も可能性の高い次のトークンを生成</li>
          <li><strong>繰り返し</strong>: 指定された長さまで繰り返し生成</li>
        </ol>

        <h2>トークン化</h2>
        <p>
          生成AIは、入力を「トークン」という小さな単位に分解して処理します。
          トークンの数は、費用や処理時間に影響する重要な指標です。
        </p>

        <CodeBlock code={`例: "こんにちは、世界"
トークン数: 約5-7トークン（言語によって異なる）

例: "function add(a, b) { return a + b; }"
トークン数: 約12トークン`} />

        <h2>コンテキストウィンドウ</h2>
        <p>
          生成AIは、過去に処理した情報を「コンテキスト」として保持します。
          このコンテキストの最大サイズを「コンテキストウィンドウ」と呼びます。
        </p>

        <h3>GitHub Copilotのコンテキスト</h3>
        <ul>
          <li>現在編集中のファイル</li>
          <li>同じプロジェクト内の関連ファイル</li>
          <li>最近の編集履歴</li>
          <li>開いている他のファイル</li>
        </ul>

        <CopilotTip>
          長いコードを書く際は、ファイルを分割するか、重要な部分にコメントで構造を明示すると、
          Copilotがより正確にコンテキストを理解できます。
        </CopilotTip>

        <h2>温度パラメータ</h2>
        <p>
          温度（temperature）は、生成の「創造性」を制御するパラメータです。
        </p>
        <ul>
          <li><strong>低い温度（0.1-0.5）</strong>: 保守的、決定的、一貫性のある出力</li>
          <li><strong>高い温度（0.8-1.5）</strong>: 創造的、多様性のある出力</li>
        </ul>

        <h2>サンプリング戦略</h2>
        <p>
          複数の候補から次のトークンを選択する方法です。
        </p>

        <CodeBlock code={`// Greedy Sampling: 最も確率の高いトークンを選ぶ
"function" → " add" (確率: 0.8)
           → " subtract" (確率: 0.1)
           → " multiply" (確率: 0.1)
// 結果: 常に同じコードが生成される

// Nucleus Sampling: トップNの累積確率から選択
// より多様な出力が可能`} />

        <div className="my-8 flex gap-4">
          <Link href="/basics">
            <Button variant="ghost">← 基礎に戻る</Button>
          </Link>
          <Link href="/basics/capabilities">
            <Button>次: 能力と限界 →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


