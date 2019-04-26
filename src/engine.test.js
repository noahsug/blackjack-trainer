import engine, { cards, getAnswer } from './engine';

it('generates player two cards', () => {
  const { playerCards } = engine.getBoard();
  expect(playerCards.length).toBe(2);
  playerCards.forEach((card) => {
    expect(cards.includes(card)).toBe(true);
  });
});

it('generates a dealer card', () => {
  const { dealerCard } = engine.getBoard();
  expect(cards.includes(dealerCard)).toBe(true);
});

it('generates card at random', () => {
  const uniqueCards = new Set();
  for (let i = 0; i < 100; i += 1) {
    const { dealerCard } = engine.getBoard();
    uniqueCards.add(dealerCard);
  }
  expect(uniqueCards.size > 1).toBe(true);
});

it('does not generate blackjack', () => {
  for (let i = 0; i < 100; i += 1) {
    const { playerCards } = engine.getBoard();
    const hasAce = playerCards.includes('A');
    const hasTen = ['10', 'J', 'Q', 'K'].some((card) => playerCards.includes(card));
    expect(hasAce && hasTen).toBe(false);
  }
});

it('generates answers for a variety of boards', () => {
  for (let i = 0; i < 100; i += 1) {
    engine.getBoard();
  }
});

it('generates answers', () => {
  expect(getAnswer({ dealerCard: 'A', playerCards: ['3', '8'] })).toBe('D');
  expect(getAnswer({ dealerCard: '2', playerCards: ['4', '5'] })).toBe('H');
  expect(getAnswer({ dealerCard: '7', playerCards: ['J', '6'] })).toBe('H');
  expect(getAnswer({ dealerCard: 'Q', playerCards: ['A', '8'] })).toBe('S');
  expect(getAnswer({ dealerCard: '6', playerCards: ['A', '8'] })).toBe('D');
  expect(getAnswer({ dealerCard: '5', playerCards: ['4', '4'] })).toBe('P');
  expect(getAnswer({ dealerCard: 'A', playerCards: ['A', 'A'] })).toBe('P');
  expect(getAnswer({ dealerCard: 'A', playerCards: ['A', 'A'] })).toBe('P');
  expect(getAnswer({ dealerCard: '6', playerCards: ['Q', 'J'] })).toBe('S');
});
