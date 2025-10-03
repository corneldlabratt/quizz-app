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


  medium: [{
    id: 11,
    question: 'What kind of scalability solution is Citrea on Bitcoin?',
    options: ['Sidechain', 'State channel', 'ZK rollup', 'Plasma'],
    correctAnswer: 'ZK rollup'
  }, {
    id: 12,
    question: 'Which crypographic technology does citrea use to enhance bitcoin blockspace?',
    options: ['Multisignatures', 'Haslocks', 'Zero-knowledge proofs', 'Threshold signatures'],
    correctAnswer: 'Zero-knowledge proofs'
  }, {
    id: 13,
    question: 'What two roles does Bitcoin play in Citrea\'s architecture?',
    options: ['Consensus and governance', 'Execution and staking', 'Data availability and Settlement', 'Sequencing and Validation'],
    correctAnswer: 'Data availability and Settlement'
  }, {
    id: 14,
    question: 'What\'s the main purpose of citrea\'s zk rollup design?',
    options: ['To replace bitcoin\'s consensus', 'To scale bitcoin while preserving security', 'To build a mew L1 blockchain', 'To reduce miner rewards'],
    correctAnswer: 'To scale bitcoin while preserving security'
  }, {
    id: 15,
    question: 'citrea testnet transaction are ultimately secured by?',
    options: ['Ethereum', 'Solana', 'Bitcoin', 'Polygon'],
    correctAnswer: 'Bitcoin'
  }, {
    id: 16,
    question: 'Citrus champion candidate role is given at what level?',
    options: ['20', '15', '9', '12'],
    correctAnswer: '15'
  }, {
    id: 17,
    question: 'To get citrus champion you need to pass a quiz?',
    options: ['True', 'False'],
    correctAnswer: 'True'
  }, {
    id: 18,
    question: '___________ is the first owned bitcoin financial platform?',
    options: ['Zentra', 'Satsuma', 'Tanari', 'Crest'],
    correctAnswer: 'Tanari'
  }, {
    id: 19,
    question: '___________ is the citrea dex?',
    options: ['Satsuma', 'DZap', 'Signal', 'Juice Swap'],
    correctAnswer: 'Satsuma'
  }, {
    id: 20,
    question: 'How many ₿apps are live on citre testnet?',
    options: ['10', '15', '7', '18'],
    correctAnswer: '15'
  },],


  hard: [{
    id: 21,
    question: 'How do ₿apps contribute to Bitcoin?',
    options: ['high gas fees', 'They expand what you can do with BTC', 'nothing special', '🤔🤔'],
    correctAnswer: 'They expand what you can do with BTC'
  }, {
    id: 22,
    question: 'How does Citrea ensure data availability for its rollup transactions?',
    options: ['Using external DA networks like Celestia', 'Posting transaction commitments and calldata directly to Bitcoin', 'Relying on sequencer honesty', 'Through Ethereum DA layers'],
    correctAnswer: 'Posting transaction commitments and calldata directly to Bitcoin'
  }, {
    id: 23,
    question: 'Citrea’s Clementine bridge design leverages which Bitcoin scripting upgrade for fraud proof verification?',
    options: ['SegWit v0', 'Taproot', 'OP_RETURN', 'OP_CHECKTEMPLATEVERIFY (CTV)'],
    correctAnswer: 'Taproot'
  }, {
    id: 24,
    question: 'Why is Citrea considered “EVM equivalent” rather than just “EVM compatible”?',
    options: ['It requires a custom compiler for Solidity', 'It reproduces Ethereum’s execution environment without changes', 'It removes gas limits from EVM', 'It runs Solidity but not Vyper'],
    correctAnswer: 'It reproduces Ethereum’s execution environment without changes'
  }, {
    id: 25,
    question: 'In Citrea, who produces zk-proofs for rollup batches?',
    options: ['Sequencers only', 'Independent provers', 'Bitcoin miners', 'Ethereum validators'],
    correctAnswer: 'Independent provers'
  }, {
    id: 26,
    question: 'What risk does Clementine mitigate by using BitVM-based verification?',
    options: ['Censorship of sequencers', 'Custodial bridges', 'Miner extractable value (MEV)', 'Proof-of-stake centralization'],
    correctAnswer: 'Custodial bridges'
  }, {
    id: 27,
    question: 'During its Series A raise, Citrea emphasized a vision of Bitcoin becoming more than “digital gold.” What key narrative was used?',
    options: ['Bitcoin as the settlement layer for global trade', 'Bitcoin as a universal data availability layer', 'Bitcoin as a base for scalable smart contract apps', 'Bitcoin as an energy-backed reserve'],
    correctAnswer: 'Bitcoin as a base for scalable smart contract apps'
  }, {
    id: 28,
    question: 'If a sequencer proposes an invalid state transition, how is it handled in Citrea?',
    options: ['Slashed via a staking mechanism', 'Ignored, but users must reorganize', 'zk-proofs fail verification, preventing finality on Bitcoin ', 'Bitcoin miners manually review proofs'],
    correctAnswer: 'zk-proofs fail verification, preventing finality on Bitcoin '
  }, {
    id: 29,
    question: ' Which team is the core builder of Citrea?',
    options: ['Chainway', 'StarkWare', 'Matter Labs', 'Offchain Labs'],
    correctAnswer: 'Chainway'
  }, {
    id: 30,
    question: 'OG role cost how many CM ? ',
    options: ['10,000', '20,000', '40,000', '80,000'],
    correctAnswer: '80,000'
  },]
};