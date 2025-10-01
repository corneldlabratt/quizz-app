import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import { useQuiz } from '../context/QuizContext';
const DifficultySelection: React.FC = () => {
  const navigate = useNavigate();
  const {
    userName,
    setDifficulty
  } = useQuiz();
  const handleDifficultySelect = (difficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(difficulty);
    // ensure context is updated before navigating
    Promise.resolve().then(() => navigate('/quiz'));
  };
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Hi {userName}! Choose Your Difficulty Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={() => handleDifficultySelect('easy')}>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Easy</h3>
                <p className="text-purple-200">
                  Perfect for beginners or a quick refresher.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 bg-opacity-30 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 bg-opacity-30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={() => handleDifficultySelect('medium')}>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Medium</h3>
                <p className="text-purple-200">
                  For those with some knowledge seeking a challenge.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-400 bg-opacity-30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={() => handleDifficultySelect('hard')}>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Hard</h3>
                <p className="text-purple-200">
                  For experts looking to truly test their knowledge.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default DifficultySelection;