import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlassCard from '../components/GlassCard';
const LandingPage: React.FC = () => {
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Test Your Knowledge with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Citrea Quiz
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
              Challenge yourself with our interactive quizzes across various
              difficulty levels and topics.
            </p>
            <Link to="/user-form" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Quiz Now
            </Link>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-900 bg-opacity-30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Why Choose Citrea Quiz?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard className="transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="bg-purple-500 bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Multiple Difficulty Levels
                  </h3>
                  <p className="text-purple-200">
                    Choose from Easy, Medium, or Hard difficulty levels to match
                    your expertise and challenge yourself.
                  </p>
                </div>
              </GlassCard>
              <GlassCard className="transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="bg-purple-500 bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Personalized Experience
                  </h3>
                  <p className="text-purple-200">
                    Get personalized feedback based on your performance and
                    track your progress over time.
                  </p>
                </div>
              </GlassCard>
              <GlassCard className="transform transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="bg-purple-500 bg-opacity-30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Instant Results
                  </h3>
                  <p className="text-purple-200">
                    Get immediate feedback on your quiz performance with
                    detailed explanations and scoring.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <GlassCard className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Test Your Knowledge?
              </h2>
              <p className="text-purple-200 mb-8">
                Start the quiz now and see how you stack up against others.
                Challenge yourself and learn something new!
              </p>
              <Link to="/user-form" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Begin Challenge
              </Link>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default LandingPage;