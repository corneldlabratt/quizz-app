import React, { useState, createContext, useContext } from 'react';
import { questions } from '../data/questions';
type Difficulty = 'easy' | 'medium' | 'hard';
interface QuizContextType {
  userName: string;
  setUserName: (name: string) => void;
  difficulty: Difficulty | null;
  setDifficulty: (difficulty: Difficulty) => void;
  score: number;
  setScore: (score: number) => void;
  currentQuestions: Question[];
  resetQuiz: () => void;
}
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
const QuizContext = createContext<QuizContextType | undefined>(undefined);
export const QuizProvider: React.FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const [userName, setUserName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [score, setScore] = useState<number>(0);
  const currentQuestions = difficulty ? questions[difficulty] : [];
  const resetQuiz = () => {
    setUserName('');
    setDifficulty(null);
    setScore(0);
  };
  return <QuizContext.Provider value={{
    userName,
    setUserName,
    difficulty,
    setDifficulty,
    score,
    setScore,
    currentQuestions,
    resetQuiz
  }}>
      {children}
    </QuizContext.Provider>;
};
export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};