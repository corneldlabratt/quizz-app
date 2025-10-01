import { Question } from '../context/QuizContext';
interface QuestionsByDifficulty {
  easy: Question[];
  medium: Question[];
  hard: Question[];
}
export const questions: QuestionsByDifficulty = {
  easy: [{
    id: 1,
    question: 'What is Citrea?',
    options: ['Fruit', 'Bitcoin\'s first ZK rollup', 'ETH security layer', 'Rollie nickname'],
    correctAnswer: 'Bitcoin\'s first ZK rollup'
  }, {
    id: 2,
    question: 'Who is the co-founder of Citrea?',
    options: ['Solace', 'Rollie', 'Moleh', 'Orkun'],
    correctAnswer: 'Orkun'
  }, {
    id: 3,
    question: 'Citrea is designed to enhance which aspect of Bitcoin?',
    options: ['Transaction speed only', 'Blockspace for programmable applications', 'Hardware wallet compatibility', 'Fiat on-ramps'],
    correctAnswer: 'Blockspace for programmable applications '
  }, {
    id: 4,
    question: 'What role gives you full access to discord?',
    options: ['OG', 'Citrus champion', 'Citreans', 'Core team'],
    correctAnswer: 'Citreans'
  }, {
    id: 5,
    question: 'Where does Citrea keep its data availability and settlement?',
    options: ['On Ethereum', 'Off-chain in a database', 'On Bitcoin\'s blockchain', 'On Solana'],
    correctAnswer: 'On Bitcoin\'s blockchai'
  }, {
    id: 6,
    question: 'Is Citrea compatible with Ethereum\'s virtual machine?  ',
    options: ['No, it\'s Bitcoin-script only', 'Yes, it\'s EVM-compatible', ' Partially, only for DeFi', 'Only for NFTs'],
    correctAnswer: 'Yes, it\'s EVM-compatible'
  }, {
    id: 7,
    question: 'What is Citrea primarily known as?',
    options: ['A Bitcoin wallet', 'Bitcoin\'s first zero-knowledge rollup', 'A decentralized exchange on Ethereum', ' A mining protocol for Bitcoin'],
    correctAnswer: 'Bitcoin\'s first zero-knowledge rollup'
  }, {
    id: 8,
    question: 'What month did the UNFREEZE CAMPAIGN start?',
    options: ['August', 'April', 'July', 'June'],
    correctAnswer: 'July'
  }, {
    id: 9,
    question: 'Total amount raised by citrea?',
    options: ['$30 million', '$16.7 million', '$7 million', '$1 billion'],
    correctAnswer: '$16.7 million'
  }, {
    id: 10,
    question: 'How many members does citrea discord community have?',
    options: ['56k', '20k', '100k', '40k'],
    correctAnswer: '56k'
  },],
  medium: [],
  hard: []
};