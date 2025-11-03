import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"
import TableOfContents from "@/components/content/TableOfContents"

export default function ImageGenerationTipsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
      <article className="prose prose-sm sm:prose md:prose-lg prose-slate dark:prose-invert max-w-none">
        <h1>画像生成AIのTips</h1>
        
        <p>
          画像生成AI（DALL-E、Midjourney、Stable Diffusionなど）を効果的に使うための
          実践的なtipsを紹介します。良い画像を生成するためのプロンプトの書き方や
          テクニックを学びましょう。
        </p>

        <TableOfContents />

        <h2>画像生成AIの種類</h2>

        <div className="my-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-semibold mb-2">DALL-E</h4>
            <p className="text-sm text-muted-foreground">
              OpenAIが開発。リアルな画像生成が得意。正確なプロンプトで高品質な画像を生成。
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-semibold mb-2">Midjourney</h4>
            <p className="text-sm text-muted-foreground">
              アーティスティックな画像生成が得意。美的な品質が高い。スタイリッシュな画像に適している。
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-semibold mb-2">Stable Diffusion</h4>
            <p className="text-sm text-muted-foreground">
              オープンソース。カスタマイズ可能。ローカルで実行できる。コントロールが細かく効く。
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h4 className="font-semibold mb-2">その他</h4>
            <p className="text-sm text-muted-foreground">
              Leonardo.ai、Ideogram、Fireflyなど様々なツールが存在。
              それぞれ特徴が異なる。
            </p>
          </div>
        </div>

        <h2>プロンプトの基本構造</h2>

        <p>
          効果的な画像生成プロンプトは、以下の要素を含むと良い結果が得られます：
        </p>

        <ol>
          <li><strong>主題</strong>: 何を描くか（例: 猫、風景、人物）</li>
          <li><strong>スタイル</strong>: どんなスタイルか（例: リアル、イラスト、アニメ）</li>
          <li><strong>詳細</strong>: 細かい特徴（例: 色、構図、表情）</li>
          <li><strong>品質設定</strong>: 解像度、品質レベル</li>
        </ol>

        <CodeBlock code={`❌ 悪い例:
"猫"

✅ 良い例:
"a cute orange tabby cat sitting on a windowsill, 
sunlight streaming through the window, 
photorealistic, high detail, 4k, soft lighting, 
cinematic composition"`} />

        <h2>効果的なプロンプトの書き方</h2>

        <h3>1. 具体的に描写する</h3>
        <p>
          抽象的な言葉よりも、具体的な描写を使うと、より意図した画像が生成されます。
        </p>

        <div className="my-6 rounded-lg border border-border bg-card p-6">
          <h4 className="mb-3 font-semibold">例: 人物の描写</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium mb-1">❌ 悪い例:</p>
              <p className="text-muted-foreground">"beautiful woman"</p>
            </div>
            <div>
              <p className="font-medium mb-1">✅ 良い例:</p>
              <p className="text-muted-foreground">
                "portrait of a young woman with long wavy brown hair, 
                wearing a white dress, standing in a flower field, 
                golden hour lighting, soft focus, film photography style"
              </p>
            </div>
          </div>
        </div>

        <h3>2. スタイル指定を明確にする</h3>
        <p>
          どのようなスタイルの画像を求めているか明確に指定します。
        </p>

        <CodeBlock code={`// スタイル指定の例
"photorealistic"  // 写真のようなリアルさ
"illustration"    // イラスト
"anime style"     // アニメ風
"oil painting"    // 油絵
"digital art"     // デジタルアート
"3D render"       // 3Dレンダリング
"watercolor"      // 水彩画`} />

        <h3>3. 構図やカメラアングルを指定</h3>
        <p>
          構図やカメラアングルを指定することで、より意図した画像が得られます。
        </p>

        <CodeBlock code={`// 構図の例
"close-up shot"           // クローズアップ
"wide angle"              // ワイドアングル
"bird's eye view"         // 俯瞰
"dutch angle"             // オランダアングル
"rule of thirds"          // 三分割法
"centered composition"    // 中央構図`} />

        <h3>4. ライティングを指定</h3>
        <p>
          光の方向や質感を指定すると、雰囲気のある画像が生成されます。
        </p>

        <CodeBlock code={`// ライティングの例
"golden hour lighting"    // 黄金時刻の光
"soft lighting"           // 柔らかい光
"dramatic lighting"       // ドラマチックな光
"rim lighting"            // 輪郭光
"natural daylight"        // 自然光
"studio lighting"         // スタジオライト`} />

        <h2>Midjourney特有のTips</h2>

        <h3>パラメータの使い方</h3>
        <p>
          Midjourneyでは、特殊なパラメータを使って画像の品質やスタイルを調整できます。
        </p>

        <CodeBlock code={`// Midjourneyパラメータの例
--ar 16:9          // アスペクト比（16:9）
--v 5              // バージョン指定
--style raw         // スタイル指定
--chaos 50          // 創造性レベル（0-100）
--quality 2         // 品質（0.25, 0.5, 1, 2）
--seed 12345        // シード値（同じ画像を再現）`} />

        <CopilotTip>
          Midjourneyでは、プロンプトの最後にパラメータを追加することで、
          細かく画像をコントロールできます。試行錯誤しながら最適な設定を見つけましょう。
        </CopilotTip>

        <h2>Stable Diffusion特有のTips</h2>

        <h3>ネガティブプロンプト</h3>
        <p>
          Stable Diffusionでは、生成したくない要素を「ネガティブプロンプト」で指定できます。
        </p>

        <CodeBlock code={`// ポジティブプロンプト
"beautiful landscape, mountains, lake, sunset"

// ネガティブプロンプト
"blurry, low quality, distorted, ugly, bad anatomy, 
watermark, text, people, cars"`} />

        <h3>LoRAモデルの活用</h3>
        <p>
          LoRA（Low-Rank Adaptation）モデルを使うことで、
          特定のスタイルやキャラクターに特化した画像を生成できます。
        </p>

        <h2>実践的なTips集</h2>

        <h3>1. イテレーションで改善する</h3>
        <p>
          最初の生成で完璧な画像ができることは稀です。
          生成された画像を見て、プロンプトを改善しながら繰り返し生成しましょう。
        </p>

        <h3>2. 既存のプロンプトを参考にする</h3>
        <p>
          Midjourneyのギャラリーや、Stable Diffusionのコミュニティで
          優秀なプロンプトを参考にすることで、学習が早くなります。
        </p>

        <h3>3. 画像の修正（Inpainting / Outpainting）を活用</h3>
        <p>
          生成された画像の一部だけを修正したい場合、
          Inpainting機能を使って修正できます。
        </p>

        <h3>4. 解像度と品質のバランス</h3>
        <p>
          高解像度を指定すると生成時間が長くなります。
          まずは低解像度で試して、気に入ったら高解像度で再生成するのが効率的です。
        </p>

        <TryItOut>
          画像生成の練習:
          <ol className="ml-4 mt-2">
            <li>シンプルなプロンプトから始める（例: "a cat"）</li>
            <li>生成された画像を確認</li>
            <li>スタイルや詳細を追加（例: "a cute orange tabby cat, watercolor style"）</li>
            <li>さらに詳細を追加して理想に近づける</li>
            <li>パラメータを調整して最適化</li>
          </ol>
        </TryItOut>

        <h2>よくある問題と対処法</h2>

        <div className="my-6 space-y-4">
          <div className="rounded-lg border border-red-500/50 bg-red-100/80 p-4 shadow-sm dark:border-red-400/60 dark:bg-red-950/70">
            <h4 className="mb-2 font-semibold text-red-900 dark:text-red-100">
              ❌ 問題: 期待した画像と違う
            </h4>
            <ul className="ml-4 mt-2 space-y-1 text-sm text-red-900 dark:text-red-50">
              <li>→ プロンプトをより具体的にする</li>
              <li>→ スタイル指定を追加する</li>
              <li>→ 複数回生成してベストなものを選ぶ</li>
            </ul>
          </div>

          <div className="rounded-lg border border-yellow-500/50 bg-yellow-100/80 p-4 shadow-sm dark:border-yellow-400/60 dark:bg-yellow-950/70">
            <h4 className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">
              ⚠️ 問題: 顔や手が歪む
            </h4>
            <ul className="ml-4 mt-2 space-y-1 text-sm text-yellow-900 dark:text-yellow-50">
              <li>→ ネガティブプロンプトに "bad anatomy" を追加</li>
              <li>→ より高品質なモデルを使用</li>
              <li>→ 生成後に画像編集ツールで修正</li>
            </ul>
          </div>

          <div className="rounded-lg border border-blue-500/50 bg-blue-100/80 p-4 shadow-sm dark:border-blue-400/60 dark:bg-blue-950/70">
            <h4 className="mb-2 font-semibold text-blue-900 dark:text-blue-100">
              💡 問題: スタイルが統一されない
            </h4>
            <ul className="ml-4 mt-2 space-y-1 text-sm text-blue-900 dark:text-blue-50">
              <li>→ シード値を固定して生成</li>
              <li>→ スタイル指定を明確にする</li>
              <li>→ LoRAモデルを使用してスタイルを固定</li>
            </ul>
          </div>
        </div>

        <h2>プロンプトテンプレート</h2>

        <p>
          よく使うプロンプトのテンプレートを用意しておくと便利です。
        </p>

        <CodeBlock code={`// ポートレート写真風
"[subject], portrait photography, 
professional lighting, shallow depth of field, 
high resolution, 8k"

// イラスト風
"[subject], digital illustration, 
colorful, vibrant, detailed, 
anime style, clean background"

// 風景写真風
"[landscape description], landscape photography, 
golden hour, wide angle, 
high detail, natural lighting, 
photorealistic"`} />

        <CopilotTip>
          画像生成AIは、繰り返し使うことで「良いプロンプトの感覚」が身についてきます。
          最初は試行錯誤が多いかもしれませんが、続けることで上達します。
        </CopilotTip>

        <div className="my-8 flex gap-4">
          <Link href="/copilot-features">
            <Button variant="ghost">← Copilotの特徴</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">トップに戻る</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}

