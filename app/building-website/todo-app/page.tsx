import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CopilotTip } from "@/components/content/CopilotTip"
import { TryItOut } from "@/components/content/TryItOut"
import { CodeBlock } from "@/components/content/CodeBlock"

export default function TodoAppPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1>実践: ToDoアプリを作る</h1>
        
        <p>
          ステップバイステップで、Copilotを使って実際のToDoアプリを構築します。
          各ステップで、効果的なプロンプトの書き方を学びます。
        </p>

        <h2>Step 1: プロンプトで要件を伝える</h2>
        
        <h3>❌ 悪いプロンプトの例</h3>
        <CodeBlock code={`// プロンプト: Todoアプリを作って`} />
        <p>問題点:</p>
        <ul>
          <li>技術スタックが不明</li>
          <li>必要な機能が不明確</li>
          <li>UI/UXの要件がない</li>
          <li>データの保存方法が不明</li>
        </ul>

        <h3>✅ 良いプロンプトの例</h3>
        <CodeBlock code={`// React + TypeScript + Tailwind CSS でToDoアプリを作成して
// 要件:
// - タスクの追加・削除・完了/未完了の切り替え
// - フィルター機能（全て/未完了/完了済み）
// - localStorageでデータを永続化
// - モダンでシンプルなUI
// - レスポンシブデザイン`} />

        <CopilotTip>
          コメント駆動開発（CDD）を実践しましょう。
          まずは要件をコメントで書いて、その後に「実装して」と指示すると、
          Copilotがより正確に理解できます。
        </CopilotTip>

        <h3>AIからの質問への対応</h3>
        <CodeBlock code={`Copilot: 「状態管理はuseState、useReducer、Zustandどれが良いですか？」

あなた: 「useStateとuseReducerの組み合わせで。複雑にならないように」

Copilot: 「エラーハンドリングは必要ですか？」

あなた: 「バリデーションは必要だけど、簡易的に」`} />

        <h2>Step 2: 生成されたコードの確認</h2>
        
        <h3>チェックリスト</h3>
        <ul>
          <li>✅ 要件を満たしているか</li>
          <li>✅ TypeScriptの型が適切に定義されているか</li>
          <li>✅ エラーハンドリングがあるか</li>
          <li>✅ アクセシビリティが考慮されているか</li>
          <li>✅ パフォーマンス上の問題はないか</li>
          <li>✅ セキュリティ上の問題はないか</li>
        </ul>

        <h3>実例: 生成されたコード</h3>
        <CodeBlock code={`// types/todo.ts
export type Todo = {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

// App.tsx
import { useState } from 'react'
import { Todo } from './types/todo'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  // ... 実装続く`} />

        <CopilotTip>
          Copilot Chatでコード説明を求めましょう。
          「この関数は何をしているか説明して」と質問すると、
          コードの理解が深まり、リファクタリングのヒントも得られます。
        </CopilotTip>

        <h2>Step 3: 機能追加とリファクタリング</h2>
        
        <h3>機能追加の例</h3>
        <CodeBlock code={`// 優先度機能を追加したい
// プロンプト: 「Todoに優先度（高/中/低）を追加して。
//            - デフォルトは「中」
//            - リストで優先度の順に並べる
//            - 優先度を変更できるボタンを追加」`} />

        <h3>リファクタリングの例</h3>
        <CodeBlock code={`// プロンプト: 「このコンポーネントを分割して。
//            - カスタムフックにロジックを移動
//            - 子コンポーネントをファイルに分割
//            - 型定義を別ファイルに移動」`} />

        <CopilotTip>
          リファクタリング時は、なぜリファクタリングしたいのか、
          どんな構造にしたいのかを明示的にコメントで説明すると、
          Copilotがより正確に理解できます。
        </CopilotTip>

        <h2>Step 4: バグ修正とデバッグ</h2>
        
        <h3>エラーメッセージをコピーして貼り付ける</h3>
        <CodeBlock code={`// エラー例:
// Error: Cannot read property 'map' of undefined
//    at TodoList.tsx:15

// プロンプト: 「このエラーを修正して。エラーは以下:
// Error: Cannot read property 'map' of undefined
//    at TodoList.tsx:15」`} />

        <CopilotTip>
          エラーメッセージをそのままコメントに貼り付けて解決策を求めると、
          Copilotが正確に問題を特定し、修正コードを提案してくれます。
        </CopilotTip>

        <h3>実際のデバッグフロー</h3>
        <ol>
          <li>エラーが発生したら、エラーメッセージをコピー</li>
          <li>Copilot Chatでエラー内容を質問</li>
          <li>提案された修正を確認して適用</li>
          <li>テストして動作確認</li>
          <li>必要に応じて繰り返し</li>
        </ol>

        <h2>実際のコード例</h2>
        
        <p>
          Copilotが生成した実用的なコード例を見てみましょう。
        </p>

        <CodeBlock code={`// hooks/useTodos.ts
import { useState, useEffect } from 'react'
import { Todo } from '../types/todo'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    // localStorageから読み込み
    const stored = localStorage.getItem('todos')
    if (stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    // localStorageに保存
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return { todos, addTodo, toggleTodo, deleteTodo }
}`} />

        <TryItOut>
          自分の好きな機能を1つ追加してみましょう。例えば:
          <ul>
            <li>フィルター機能（全て/未完了/完了済み）</li>
            <li>優先度設定（高/中/低）</li>
            <li>期限設定</li>
            <li>検索機能</li>
            <li>カテゴリ機能</li>
          </ul>
          まずはコメントで要件を書いて、Copilotに実装を求めましょう。
        </TryItOut>

        <div className="my-8 flex gap-4">
          <Link href="/building-website">
            <Button variant="ghost">← Webサイトを作るに戻る</Button>
          </Link>
          <Link href="/prompting">
            <Button>次: プロンプトエンジニアリング →</Button>
          </Link>
        </div>
      </article>
    </div>
  )
}


