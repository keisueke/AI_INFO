export type PersonaId = 
  | 'literature-newcomer'
  | 'veteran-engineer'
  | 'experienced-pm'
  | 'ai-dependent-junior'
  | 'ai-skeptic'
  | 'ai-anxious';

export interface Persona {
  id: PersonaId;
  name: string;
  description: string;
  commonMisconceptions: string[];
  advice: string;
  suggestion: string; // 「このように考えてみては？」
  recommendedPath: {
    label: string;
    href: string;
  };
}

export const personas: Persona[] = [
  {
    id: 'literature-newcomer',
    name: '文学系新社会人',
    description: '技術知識が浅く、AIを過度に依存しているタイプ。プロンプトの重要性を理解していない。完璧な答えを期待し、試行錯誤が必要なことを理解していない。',
    commonMisconceptions: [
      'AIは一度のプロンプトで完璧なコードを生成できる',
      '技術的な知識がなくてもAIがすべて解決してくれる',
      'プロンプトエンジニアリングは不要',
      '生成されたコードは必ず正しい'
    ],
    advice: '生成AIは対話的なツールです。完璧な答えを一度に求めるのではなく、段階的に改善していくことが大切です。プロンプトを工夫することで、より良い結果が得られます。',
    suggestion: '「AIは完璧な答えを一度に出してくれる」という考え方から、「AIと対話しながら一緒にコードを作っていく」という考え方にシフトしてみませんか？基礎を学ぶことで、AIとのより良い協働が可能になります。',
    recommendedPath: {
      label: '基礎を学ぶ',
      href: '/basics'
    }
  },
  {
    id: 'veteran-engineer',
    name: '技術一筋20年エンジニア',
    description: '従来の手法に固執し、AIを過小評価しているタイプ。新しい学習意欲が低く、「自分のコードの方が正しい」と考える傾向がある。',
    commonMisconceptions: [
      '従来の開発手法がすべて優れている',
      'AIが生成するコードは品質が低い',
      '新しいツールを学ぶ時間が無駄',
      '経験と実績があればAIは不要'
    ],
    advice: 'AIは既存の知識を補完し、繰り返し作業を効率化する強力なツールです。従来の手法とAIを組み合わせることで、より生産的な開発が可能になります。',
    suggestion: '「従来の方法が最適」という考えから、「AIと従来手法のベストミックスを探る」という考え方にシフトしてみませんか？プロンプトエンジニアリングを学ぶことで、AIをより効果的に活用できます。',
    recommendedPath: {
      label: 'プロンプトエンジニアリングを学ぶ',
      href: '/prompting'
    }
  },
  {
    id: 'experienced-pm',
    name: 'PM経験豊富な人',
    description: '要件定義や全体像を把握するのは得意だが、技術的詳細を理解していない。AIに過度な期待をし、現実的な制約を理解していない。',
    commonMisconceptions: [
      'AIがあれば技術的な知識は不要',
      'どんな要求でもAIが実装できる',
      '開発期間を大幅に短縮できる',
      'AIが自動的に最適解を見つけてくれる'
    ],
    advice: 'AIは強力なツールですが、技術的な制約やトレードオフを理解した上で使うことが重要です。適切な期待値を設定し、段階的に進めることで、より良い結果が得られます。',
    suggestion: '「AIがすべて解決してくれる」という期待から、「AIと人間の役割分担を明確にする」という考え方にシフトしてみませんか？リスクと注意点を理解することで、より現実的な計画を立てられます。',
    recommendedPath: {
      label: 'リスクと注意点を理解する',
      href: '/risks'
    }
  },
  {
    id: 'ai-dependent-junior',
    name: 'AI依存の若手エンジニア',
    description: '生成されたコードをそのまま使用し、レビューを軽視するタイプ。デバッグ力が不足しており、エラーが発生しても自分で解決できない。',
    commonMisconceptions: [
      'AIが生成したコードはそのまま使える',
      'コードレビューは不要',
      'エラーが出たらAIに聞けば解決する',
      '自分の理解がなくてもコードは動けばOK'
    ],
    advice: 'AIの生成コードも必ずレビューし、理解してから使用することが大切です。エラーが発生した際は、まず自分で原因を調べ、その後AIに相談する習慣をつけましょう。',
    suggestion: '「生成コードをそのまま使う」という考えから、「生成コードを理解してから使う」という考え方にシフトしてみませんか？実践を通じて、AIと共に成長する方法を学べます。',
    recommendedPath: {
      label: '実践で学ぶ',
      href: '/building-website'
    }
  },
  {
    id: 'ai-skeptic',
    name: 'AI無能論者（SIerベテラン）',
    description: '生成AIは使えない、期待外れだと考えているタイプ。実績や経験に基づいてAIを過小評価し、試行錯誤の価値を理解していない。',
    commonMisconceptions: [
      '生成AIはまだ実用レベルに達していない',
      '試したけど期待外れだった',
      '従来の方法の方が確実',
      'AIに時間をかけるくらいなら自分で書いた方が早い'
    ],
    advice: '生成AIは適切な使い方を学ぶことで、強力な開発ツールになります。初期の失敗体験にとらわれず、プロンプトの工夫や段階的なアプローチを試してみてください。',
    suggestion: '「AIは使えない」という先入観から、「AIの適切な使い方を探る」という姿勢にシフトしてみませんか？基本的な仕組みと能力を理解することで、効果的な活用法が見えてきます。',
    recommendedPath: {
      label: '基礎を学ぶ',
      href: '/basics'
    }
  },
  {
    id: 'ai-anxious',
    name: 'AI不信・不安感のある人（SIer中堅）',
    description: '生成AIが気持ち悪い、よくわからないと感じるタイプ。ブラックボックス感に不安を覚え、セキュリティリスクを過度に心配して使用を避ける。',
    commonMisconceptions: [
      'AIはブラックボックスで危険',
      'セキュリティリスクが高すぎる',
      'AIが生成するコードは信用できない',
      '情報漏洩のリスクがある'
    ],
    advice: 'AIの仕組みとリスクを正しく理解することで、適切な使用方法が見えてきます。セキュリティに配慮しつつ、段階的に活用を始めることが大切です。',
    suggestion: '「AIは未知で危険」という不安から、「AIの仕組みとリスクを理解した上で使う」という考え方にシフトしてみませんか？リスクと注意点を学ぶことで、安全にAIを活用できます。',
    recommendedPath: {
      label: 'リスクと注意点を理解する',
      href: '/risks'
    }
  }
];

export function getPersona(id: PersonaId): Persona | undefined {
  return personas.find(p => p.id === id);
}

