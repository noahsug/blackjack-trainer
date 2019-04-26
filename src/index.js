import './style.css';
import engine from './engine';

const root = document.querySelector('.app');
let state = {};
render();

function render() {
  const board = engine.getBoard();
  state = { answer: board.answer };
  root.innerHTML = '';
  root.appendChild(renderBoard(board));
}

function renderBoard({ playerCards, dealerCard }) {
  const board = document.createElement('div');
  [renderDealer(dealerCard), renderPlayerCards(playerCards), renderActions()].forEach((element) => {
    board.appendChild(element);
  });
  return board;
}

function renderPlayerCards(playerCards) {
  const playerContainer = document.createElement('div');
  playerContainer.classList.add('player');
  playerCards.forEach((card) => {
    playerContainer.appendChild(renderCard(card));
  });
  return playerContainer;
}

function renderDealer(dealerCard) {
  const dealerContainer = document.createElement('div');
  dealerContainer.classList.add('dealer');
  dealerContainer.appendChild(renderCard(dealerCard));
  return dealerContainer;
}

function renderActions() {
  const actionsContainer = document.createElement('div');
  actionsContainer.classList.add('actions');
  ['H', 'S', 'D', 'P'].forEach((action) => {
    actionsContainer.appendChild(renderButton(action));
  });
  return actionsContainer;
}

function renderButton(action) {
  const button = document.createElement('div');
  button.classList.add('button');
  button.innerHTML = action;

  button.addEventListener('click', onAction);
  button.addEventListener('touch', onAction);

  return button;
}

function onAction(e) {
  root.classList.remove('wrong');
  root.classList.remove('fade');

  const guess = e.target.textContent;
  if (state.answer === guess) {
    render();
  } else {
    root.classList.add('wrong');
  }
  setTimeout(() => {
    root.classList.add('fade');
  });
}

function renderCard(card) {
  const cardEle = document.createElement('div');
  cardEle.innerHTML = card;
  cardEle.classList.add('card');
  return cardEle;
}
