import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import { useQuiz } from '../context/QuizContext';
const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    userName,
    difficulty,
    score,
    resetQuiz
  } = useQuiz();
  useEffect(() => {
    if (!userName || score === undefined) {
      navigate('/');
    }
  }, [userName, score, navigate]);
  const getMotivationalText = () => {
    if (score >= 80) {
      return {
        title: 'Citrea Champion',
        message: "Incredible performance! Your knowledge is truly impressive. You've mastered this subject and should be proud of your accomplishment!",
        icon: '🏆'
      };
    } else if (score >= 65) {
      return {
        title: 'OG',
        message: "Good effort! You've shown a solid understanding of the material. With a bit more study, you could become a master in no time!",
        icon: '🌟'
      };
    } else if (score >= 40) {
      return {
        title: 'Rising Star',
        message: "Not bad! You've got a decent grasp of the concepts. Keep pushing yourself and you'll see great improvement soon!",
        icon: '🚀'
      };
    }
    else {
      return {
        title: 'Novice',
        message: "Everyone starts somewhere! This quiz has identified areas where you can focus your learning. Keep practicing and you'll improve quickly!",
        icon: '🌱'
      };
    }
  };
  const motivationalContent = getMotivationalText();
  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate('/user-form');
  };
  const handleNewQuiz = () => {
    resetQuiz();
    navigate('/');
  };
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-300';
    if (score >= 50) return 'text-yellow-300';
    return 'text-red-300';
  };
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <GlassCard className="text-center">
            <div className="mb-6">
              <span className="text-6xl">{motivationalContent.icon}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Quiz Results for {userName}
            </h2>
            <p className="text-purple-200 mb-6">
              {difficulty && `Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`}
            </p>
            <div className="mb-8">
              <div className="text-5xl font-bold mb-2 animate-pulse">
                <span className={getScoreColor()}>{score.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-10 rounded-full h-4 mb-4">
                <div className={`h-4 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                width: `${score}%`
              }}></div>
              </div>
            </div>
            <div className="mb-8 p-6 bg-white bg-opacity-5 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-3">
                {motivationalContent.title}
              </h3>
              <p className="text-purple-200">{motivationalContent.message}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={handleRetakeQuiz} className="px-6 py-3 rounded-lg bg-purple-600 bg-opacity-70 hover:bg-opacity-100 transition-all text-white font-bold">
                Retake Quiz
              </button>
              <button onClick={handleNewQuiz} className="px-6 py-3 rounded-lg bg-pink-600 bg-opacity-70 hover:bg-opacity-100 transition-all text-white font-bold">
                Back to Home
              </button>
            </div>
          </GlassCard>
          <div className="mt-8 text-center text-purple-200">
            <p>Thank you for completing the Citrea Quiz!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default ResultsPage;