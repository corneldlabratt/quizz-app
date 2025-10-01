import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
import { useQuiz } from '../context/QuizContext';
const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    setUserName
  } = useQuiz();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please enter a valid name (at least 2 characters)');
      return;
    }
    setUserName(name);
    navigate('/difficulty');
  };
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <GlassCard className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Welcome to Citrea Quiz!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-purple-200 mb-2">
                What's your name?
              </label>
              <input type="text" id="name" value={name} onChange={e => {
              setName(e.target.value);
              setError('');
            }} placeholder="Enter your name" className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500" autoFocus />
              {error && <p className="text-pink-300 mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Continue
            </button>
          </form>
          <div className="mt-8 text-center text-purple-200">
            <p>Get ready to test your knowledge!</p>
          </div>
        </GlassCard>
      </main>
      <Footer />
    </div>;
};
export default UserForm;