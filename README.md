# AI Learning - 生成AIでWebアプリ開発を学ぶ

生成AI初学者のITエンジニア向けのWebアプリケーション開発学習サイトです。

GitHub Copilot、Cursorなどの生成AIツールを活用してWebアプリケーションを開発する方法を、基礎から実践まで学べる包括的なリソースを提供します。

## 概要

このサイトは、生成AIを活用したWebアプリケーション開発を学ぶための包括的な学習リソースです。

### 主要コンテンツ

1. **生成AIの基礎** - 仕組み、能力と限界を理解
2. **Webサイトを作る** - ToDoアプリを実際に作りながら学ぶ
3. **プロンプトエンジニアリング** - 効果的な指示の書き方
4. **Git Worktree** - マルチエージェント開発の実践
5. **Vibecoding: 雰囲気コーディング** - AIと人間が交互にコードを書く開発スタイル
6. **リスクと注意点** - セキュリティ、コード品質の問題
7. **実践的な開発フロー** - 効率的な開発手法
8. **ベストプラクティス** - チーム開発での活用
9. **リソース** - 参考資料とコミュニティ

### 特徴

- ✅ **Copilot Tips**: 各セクションに実用的なCopilot活用のヒント
- ✅ **やってみよう**: 実践的な課題で学習を深める
- ✅ **インタラクティブ**: コード例、プロンプト例を豊富に掲載
- ✅ **ダークモード対応**: 開発者向けの見やすいデザイン
- ✅ **レスポンシブ**: モバイルでも快適に学習

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/uiベース
- **Deployment**: Vercel

## ローカル開発

### 前提条件

- Node.js 20以上
- npm

### セットアップ

```bash
# リポジトリをクローン
git clone <repository-url>
cd ai-learning-site

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### ビルド

```bash
# 本番用ビルド
npm run build

# ビルドしたアプリを起動
npm start
```

## Vercelへのデプロイ

### 方法1: Vercel CLIを使用

```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

### 方法2: GitHub連携

1. GitHubリポジトリにプッシュ
2. Vercelでリポジトリをインポート
3. 自動デプロイが有効になる

## プロジェクト構成

```
ai-learning-site/
├── app/                           # Next.js App Router
│   ├── basics/                   # 生成AIの基礎
│   ├── building-website/         # Webサイトを作る
│   ├── prompting/                # プロンプトエンジニアリング
│   ├── worktree/                 # Git Worktree
│   ├── vibecording/              # Vibecording
│   ├── risks/                    # リスクと注意点
│   ├── resources/                # リソース
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # トップページ
│   └── globals.css              # グローバルスタイル
├── components/
│   ├── layout/                  # レイアウトコンポーネント
│   ├── ui/                      # UIコンポーネント
│   └── content/                 # コンテンツコンポーネント
├── lib/                         # ユーティリティ
└── docs/                        # ドキュメント
    └── WRITING_GUIDELINES.md    # 文章作成ガイドライン
```

## コンテンツの特徴

### Copilot Tips

各セクションにGitHub Copilotの実用的な使い方を掲載:
- コメント駆動開発（CDD）
- 効果的なプロンプトの書き方
- コンテキスト管理
- エラーデバッグ

### やってみよう

各章の最後に実践的な課題を用意:
- 実際のプロジェクトで試す
- 学んだことを即座に応用
- 自分のペースで学習

### コード例

豊富なコード例とプロンプト例:
- 良い例と悪い例の比較
- 実際に動くコード
- ステップバイステップの説明

## ライセンス

MIT

## コンテンツ作成ガイドライン

新しいページやコンテンツを作成する際は、[文章作成ガイドライン](./docs/WRITING_GUIDELINES.md)を参照してください。

主なポイント:
- 見出しの階層を明確に（h1 → h2 → h3）
- 段落は3-5文程度を目安
- 長いページには目次（TableOfContents）を追加
- 具体例とコード例を適切に配置

## 貢献

プルリクエストを歓迎します。大きな変更を行う場合は、まずイシューを開いて変更内容を議論してください。
