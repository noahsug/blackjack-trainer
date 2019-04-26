import strategyData from '../data/strategy';

export const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function getBoard() {
  const playerCards = [sampleCard(), sampleCard()];
  // don't generate blackjack, it's boring
  if (sumCards(...playerCards) === 21) return getBoard();

  const dealerCard = sampleCard();
  const answer = getAnswer({ dealerCard, playerCards });

  // lean towards more interesting boards
  if (interestingness({ playerCards, dealerCard }) < Math.random()) return getBoard();

  return { playerCards, dealerCard, answer };
}

function sampleCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function interestingness({ playerCards }) {
  if (playerCards.includes('A')) return 0.5;
  if (normalize(playerCards[0]) === normalize(playerCards[1])) {
    return sumCards(playerCards) === 20 ? 0.25 : 1;
  }
  if (sumCards(playerCards) < 8) return 0.04;
  if (sumCards(playerCards) > 17) return 0.04;
  return 0.15;
}

export function getAnswer({ dealerCard, playerCards }) {
  const rowItem = getRowItem(playerCards);
  const colItem = getColItem(dealerCard);
  const rowIndex = strategyData.indexOf(strategyData.find((row) => row[0] === rowItem));
  const colIndex = strategyData[0].indexOf(colItem);
  if (!strategyData[rowIndex] || !strategyData[rowIndex][colIndex]) {
    throw new Error(`can't find ${dealerCard} with ${playerCards} (${colItem}, ${rowItem})`);
  }
  return strategyData[rowIndex][colIndex];
}

function getRowItem([card1, card2]) {
  // pairs
  if (normalize(card1) === normalize(card2)) {
    return `${normalize(card1)},${normalize(card2)}`;
  }
  // soft
  if (card1 === 'A' || card2 === 'A') {
    return `S${sumCards(card1, card2)}`;
  }
  // hard
  return `${sumCards(card1, card2)}`;
}

function getColItem(card) {
  return `${normalize(card)}`;
}

function sumCards(card1, card2) {
  return cardValue(card1) + cardValue(card2);
}

function cardValue(card) {
  return card === 'A' ? 11 : normalize(card);
}

function normalize(card) {
  return Number(card) || (card === 'A' ? 'A' : 10);
}

export default { getBoard };
