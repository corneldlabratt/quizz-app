import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import { useQuiz } from '../context/QuizContext';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    userName,
    difficulty,
    currentQuestions,
    setScore
  } = useQuiz();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(currentQuestions.length).fill(''));
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [validationError, setValidationError] = useState<string>('');

  // Redirect if no difficulty is selected
  useEffect(() => {
    if (!difficulty) {
      navigate('/difficulty');
    }
    // Set time based on difficulty
    const difficultyTimes: Record<string, number> = {
      easy: 60,
      medium: 45,
      hard: 30
    };
    setTimeLeft(difficulty ? difficultyTimes[difficulty] : 60);
  }, [difficulty, navigate]);

  // Timer countdown (visual only; no auto-submit)
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
    // clear any validation error when the user selects an answer
    if (validationError) setValidationError('');
  };

  const handleNext = () => {
    // require an answer for the current question before moving next
    if (!selectedAnswers[currentQuestionIndex]) {
      setValidationError('Please answer this question before proceeding.');
      // clear the error after a short delay
      setTimeout(() => setValidationError(''), 2000);
      return;
    }
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Manual submit only
  const handleSubmit = () => {
    const correctAnswers = currentQuestions.filter((q, index) => q.correctAnswer === selectedAnswers[index]).length;
    const scorePercentage = (currentQuestions.length > 0) ? (correctAnswers / currentQuestions.length * 100) : 0;
    setScore(scorePercentage);
    navigate('/results');
  };

  if (!difficulty || currentQuestions.length === 0) {
    return <div className="text-white">Loading...</div>;
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Navbar />
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-white">
              <span className="font-bold">User:</span> {userName}
            </div>
            <div className="text-white">
              <span className="font-bold">Difficulty:</span>{' '}
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
            <div className={`font-bold ${timeLeft < 10 ? 'text-red-300' : 'text-white'}`}>
              Time: {formatTime(timeLeft)}
            </div>
          </div>
          <GlassCard>
            <div className="mb-4 flex justify-between">
              <span className="text-white font-bold">
                Question {currentQuestionIndex + 1} of {currentQuestions.length}
              </span>
              <span className="text-purple-300">
                {selectedAnswers[currentQuestionIndex] ? 'Answered' : 'Not answered'}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              {currentQuestion.question}
            </h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => <div key={index} onClick={() => handleAnswerSelect(option)} className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${selectedAnswers[currentQuestionIndex] === option ? 'bg-purple-600 bg-opacity-50 border-2 border-purple-400' : 'bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-10'}`}>
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${selectedAnswers[currentQuestionIndex] === option ? 'bg-purple-400 text-purple-900' : 'bg-white bg-opacity-20 text-white'}`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-white">{option}</span>
                  </div>
                </div>)}
              {validationError && <div className="text-yellow-300 mt-3">{validationError}</div>}
            </div>
            <div className="mt-8 flex justify-between">
              <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className={`px-6 py-2 rounded-lg text-white font-bold ${currentQuestionIndex === 0 ? 'bg-gray-600 bg-opacity-30 cursor-not-allowed' : 'bg-purple-600 bg-opacity-70 hover:bg-opacity-100 transition-all'}`}>
                Previous
              </button>
              {currentQuestionIndex < currentQuestions.length - 1 ? <button onClick={handleNext} className="px-6 py-2 rounded-lg bg-purple-600 bg-opacity-70 hover:bg-opacity-100 transition-all text-white font-bold">
                  Next
                </button> : <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-green-600 bg-opacity-70 hover:bg-opacity-100 transition-all text-white font-bold">
                  Submit Quiz
                </button>}
            </div>
          </GlassCard>
          <div className="mt-8">
            <GlassCard>
              <div className="flex flex-wrap justify-center gap-2">
                {currentQuestions.map((_, index) => <div key={index} onClick={() => setCurrentQuestionIndex(index)} className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${index === currentQuestionIndex ? 'bg-purple-500 text-white' : selectedAnswers[index] ? 'bg-green-500 bg-opacity-50 text-white' : 'bg-white bg-opacity-20 text-white'}`}>
                    {index + 1}
                  </div>)}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default QuizPage;