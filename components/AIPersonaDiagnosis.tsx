'use client';

import { useState, useCallback } from 'react';
import { questions } from '@/lib/questions';
import { PersonaId, personas, getPersona } from '@/lib/personas';
import AIPersonaResultModal from './AIPersonaResultModal';
import { Button } from '@/components/ui/button';

interface DiagnosisState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  scores: Partial<Record<PersonaId, number>>;
}

interface AIPersonaDiagnosisProps {
  onComplete?: () => void;
}

export default function AIPersonaDiagnosis({ onComplete }: AIPersonaDiagnosisProps) {
  const [state, setState] = useState<DiagnosisState>({
    currentQuestionIndex: 0,
    answers: {},
    scores: {}
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<PersonaId | null>(null);

  const handleAnswer = useCallback((questionId: string, optionIndex: number) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const option = question.options[optionIndex];
    const newScores = { ...state.scores };

    // スコアを追加
    Object.entries(option.personaScores).forEach(([personaId, score]) => {
      newScores[personaId as PersonaId] = (newScores[personaId as PersonaId] || 0) + score;
    });

    const newAnswers = {
      ...state.answers,
      [questionId]: optionIndex.toString()
    };

    const nextQuestionIndex = state.currentQuestionIndex + 1;

    if (nextQuestionIndex >= questions.length) {
      // 診断終了 - 最もスコアが高いペルソナを判定
      const sortedPersonas = Object.entries(newScores)
        .sort(([, a], [, b]) => (b || 0) - (a || 0));
      
      const topPersonaId = sortedPersonas[0]?.[0] as PersonaId;
      setSelectedPersona(topPersonaId || 'literature-newcomer');
      setShowResult(true);
    } else {
      setState({
        currentQuestionIndex: nextQuestionIndex,
        answers: newAnswers,
        scores: newScores
      });
    }
  }, [state]);

  const handleRestart = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      scores: {}
    });
    setShowResult(false);
    setSelectedPersona(null);
  }, []);

  const currentQuestion = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  const handleCloseModal = useCallback(() => {
    setShowResult(false);
    // モーダルを閉じた後、親コンポーネントに通知
    if (onComplete) {
      setTimeout(() => {
        onComplete();
      }, 300);
    } else {
      // コールバックがない場合は診断をリセット
      setTimeout(() => {
        handleRestart();
      }, 300);
    }
  }, [handleRestart, onComplete]);

  if (showResult && selectedPersona) {
    return (
      <AIPersonaResultModal
        personaId={selectedPersona}
        onClose={handleCloseModal}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-lg border border-border p-4 sm:p-6 md:p-8 shadow-lg">
        {/* 進捗バー */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              質問 {state.currentQuestionIndex + 1} / {questions.length}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 質問 */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
            {currentQuestion.text}
          </h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(currentQuestion.id, index)}
                className="w-full text-left p-4 rounded-lg border border-border bg-background hover:bg-muted/50 hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 前の質問に戻るボタン（最初の質問以外） */}
        {state.currentQuestionIndex > 0 && (
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => {
                const prevIndex = state.currentQuestionIndex - 1;
                const prevQuestion = questions[prevIndex];
                const newAnswers = { ...state.answers };
                delete newAnswers[prevQuestion.id];
                setState({
                  ...state,
                  currentQuestionIndex: prevIndex,
                  answers: newAnswers
                });
              }}
            >
              ← 前の質問に戻る
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

