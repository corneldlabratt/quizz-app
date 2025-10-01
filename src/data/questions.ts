import { Question } from '../context/QuizContext';
interface QuestionsByDifficulty {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}
export const questions: QuestionsByDifficulty = {
  easy: [{
    id: 1,
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  }, {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correctAnswer: 'Mars'
  }, {
    id: 3,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  }, {
    id: 4,
    question: 'Which of these is a fruit?',
    options: ['Carrot', 'Potato', 'Apple', 'Broccoli'],
    correctAnswer: 'Apple'
  }, {
    id: 5,
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7'
  }],
  medium: [{
    id: 1,
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  }, {
    id: 2,
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 'Au'
  }, {
    id: 3,
    question: 'What year did World War II end?',
    options: ['1943', '1945', '1947', '1950'],
    correctAnswer: '1945'
  }, {
    id: 4,
    question: 'Which element has the atomic number 1?',
    options: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'],
    correctAnswer: 'Hydrogen'
  }, {
    id: 5,
    question: 'What is the largest mammal on Earth?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
    correctAnswer: 'Blue Whale'
  }],
  hard: [{
    id: 1,
    question: 'In quantum physics, what is the name of the principle that states you cannot know both the position and momentum of a particle precisely?',
    options: ['Theory of Relativity', 'Heisenberg Uncertainty Principle', 'Pauli Exclusion Principle', "Schrödinger's Equation"],
    correctAnswer: 'Heisenberg Uncertainty Principle'
  }, {
    id: 2,
    question: 'What is the smallest prime number greater than 100?',
    options: ['101', '103', '107', '109'],
    correctAnswer: '101'
  }, {
    id: 3,
    question: 'Which programming language was developed by Brendan Eich in 1995?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    correctAnswer: 'JavaScript'
  }, {
    id: 4,
    question: 'What is the capital of Kazakhstan?',
    options: ['Astana', 'Almaty', 'Bishkek', 'Tashkent'],
    correctAnswer: 'Astana'
  }, {
    id: 5,
    question: 'Which scientist proposed the theory of general relativity?',
    options: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein'
  }]
};