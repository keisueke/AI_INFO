import { PersonaId } from './personas';

export interface Question {
  id: string;
  text: string;
  options: {
    text: string;
    personaScores: Partial<Record<PersonaId, number>>; // 各ペルソナへのスコア（0-10）
  }[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    text: '生成AIを初めて使った時の印象は？',
    options: [
      {
        text: '期待外れだった、使えない',
        personaScores: {
          'ai-skeptic': 10,
        }
      },
      {
        text: '完璧な答えが出てくると思っていた',
        personaScores: {
          'literature-newcomer': 9,
          'experienced-pm': 7,
        }
      },
      {
        text: 'よくわからない、気持ち悪い',
        personaScores: {
          'ai-anxious': 10,
        }
      },
      {
        text: '便利だが、レビューは必要だと感じた',
        personaScores: {
          'veteran-engineer': 8,
        }
      },
      {
        text: 'すごく便利、何でも使える',
        personaScores: {
          'ai-dependent-junior': 9,
        }
      },
      {
        text: 'まだ使っていない',
        personaScores: {
          'literature-newcomer': 7,
          'ai-anxious': 6,
        }
      }
    ]
  },
  {
    id: 'q2',
    text: '生成AIが生成したコードをどう扱いますか？',
    options: [
      {
        text: 'そのまま使う、問題があればAIに修正してもらう',
        personaScores: {
          'ai-dependent-junior': 10,
          'literature-newcomer': 8,
        }
      },
      {
        text: 'しっかりレビューして、必要に応じて修正する',
        personaScores: {
          'veteran-engineer': 9,
          'experienced-pm': 7,
        }
      },
      {
        text: '使わない、信用できない',
        personaScores: {
          'ai-skeptic': 9,
          'ai-anxious': 8,
        }
      }
    ]
  },
  {
    id: 'q3',
    text: 'プロンプトを書き換えて何度も試行錯誤することについてどう思いますか？',
    options: [
      {
        text: '時間の無駄、一度で完璧な答えが欲しい',
        personaScores: {
          'literature-newcomer': 10,
          'experienced-pm': 7,
        }
      },
      {
        text: '当然のこと、対話しながら改善していく',
        personaScores: {
          'experienced-pm': 6,
          'veteran-engineer': 5,
        }
      },
      {
        text: '試行錯誤するくらいなら自分で書いた方が早い',
        personaScores: {
          'ai-skeptic': 10,
          'veteran-engineer': 8,
        }
      },
      {
        text: '試行錯誤の過程で何が起こるかわからないのが不安',
        personaScores: {
          'ai-anxious': 9,
        }
      },
      {
        text: 'プロンプトの書き方を知らない',
        personaScores: {
          'ai-dependent-junior': 8,
          'literature-newcomer': 7,
        }
      }
    ]
  },
  {
    id: 'q4',
    text: '生成AIを使う際、最も重要だと思うことは？',
    options: [
      {
        text: '技術的な知識がなくても使えること',
        personaScores: {
          'literature-newcomer': 10,
          'experienced-pm': 8,
        }
      },
      {
        text: '生成されたコードを理解してから使うこと',
        personaScores: {
          'veteran-engineer': 9,
        }
      },
      {
        text: 'セキュリティリスクがないこと',
        personaScores: {
          'ai-anxious': 10,
        }
      },
      {
        text: '従来の方法より確実で早いこと',
        personaScores: {
          'ai-skeptic': 9,
          'veteran-engineer': 7,
        }
      },
      {
        text: '便利さ、手軽さ',
        personaScores: {
          'ai-dependent-junior': 9,
        }
      }
    ]
  },
  {
    id: 'q5',
    text: 'エラーが出た時、最初に何をしますか？',
    options: [
      {
        text: 'AIに聞き直す、プロンプトを変えて再生成',
        personaScores: {
          'ai-dependent-junior': 10,
          'literature-newcomer': 9,
        }
      },
      {
        text: '自分で原因を調べる、エラーメッセージを読む',
        personaScores: {
          'veteran-engineer': 10,
        }
      },
      {
        text: 'AIを使わない判断が正しかったと確認する',
        personaScores: {
          'ai-skeptic': 10,
        }
      },
      {
        text: 'セキュリティ問題かもしれないと疑う',
        personaScores: {
          'ai-anxious': 10,
        }
      },
      {
        text: '技術的な理解がないので、AIに任せる',
        personaScores: {
          'experienced-pm': 8,
          'literature-newcomer': 7,
        }
      }
    ]
  },
  {
    id: 'q6',
    text: '生成AIについて「従来の開発手法の方が確実だ」という意見についてどう思いますか？',
    options: [
      {
        text: 'その通りだと思う',
        personaScores: {
          'veteran-engineer': 9,
          'ai-skeptic': 8,
        }
      },
      {
        text: 'AIを使えば開発がもっと早くなる',
        personaScores: {
          'experienced-pm': 8,
          'literature-newcomer': 7,
          'ai-dependent-junior': 7,
        }
      },
      {
        text: '両方を組み合わせるのが良い',
        personaScores: {
          'experienced-pm': 6,
          'veteran-engineer': 5,
        }
      },
      {
        text: 'どちらも信用できない',
        personaScores: {
          'ai-anxious': 8,
        }
      }
    ]
  },
  {
    id: 'q7',
    text: '生成AIを使う上で最も不安なことは？',
    options: [
      {
        text: '特に不安はない',
        personaScores: {
          'ai-dependent-junior': 9,
          'literature-newcomer': 6,
        }
      },
      {
        text: 'セキュリティリスク、情報漏洩、データが外部に送られる',
        personaScores: {
          'ai-anxious': 10,
          'experienced-pm': 7,
        }
      },
      {
        text: 'コードの品質、バグが含まれる可能性',
        personaScores: {
          'veteran-engineer': 9,
          'ai-skeptic': 8,
        }
      },
      {
        text: '使う必要性を感じない、時間の無駄',
        personaScores: {
          'ai-skeptic': 10,
          'veteran-engineer': 7,
        }
      },
      {
        text: '期待通りの結果が出ない',
        personaScores: {
          'literature-newcomer': 8,
          'experienced-pm': 6,
        }
      }
    ]
  },
  {
    id: 'q8',
    text: '「生成AIは人間のエンジニアに取って代わる」という意見についてどう思いますか？',
    options: [
      {
        text: 'そう思う、人間はいらなくなる',
        personaScores: {
          'literature-newcomer': 7,
          'experienced-pm': 6,
        }
      },
      {
        text: 'そうはならない、人間の方が優秀',
        personaScores: {
          'veteran-engineer': 9,
          'ai-skeptic': 8,
        }
      },
      {
        text: '協働する関係になる',
        personaScores: {
          'experienced-pm': 7,
          'veteran-engineer': 5,
        }
      },
      {
        text: 'よくわからない、不安だ',
        personaScores: {
          'ai-anxious': 9,
        }
      },
      {
        text: '関係ない、とにかく便利だから使う',
        personaScores: {
          'ai-dependent-junior': 9,
        }
      }
    ]
  }
];

