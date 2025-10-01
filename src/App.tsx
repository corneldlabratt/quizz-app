import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LandingPage from './pages/LandingPage';
import UserForm from './pages/UserForm';
import DifficultySelection from './pages/DifficultySelection';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import { QuizProvider } from './context/QuizContext';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="page" timeout={350} unmountOnExit>
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/difficulty" element={<DifficultySelection />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export function App() {
  return <QuizProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </QuizProvider>;
}