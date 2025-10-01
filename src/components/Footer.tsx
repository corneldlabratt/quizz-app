import React from 'react';
const Footer: React.FC = () => {
  return <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div>
          <div>
            <h3 className="text-xl font-bold mb-3">Citrea Quiz</h3>
            <p className="text-purple-200">
              Test your knowledge with our interactive quizzes across various
              difficulty levels.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-purple-800 text-center text-purple-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Citrea Quiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;