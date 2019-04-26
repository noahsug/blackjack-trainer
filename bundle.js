/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__(0);

// CONCATENATED MODULE: ./data/strategy.js
/**
 * Rules:
 *  - 4+ decks
 *  - hit on soft 17
 *  - double after split
 *  - no surrender
 *  - peak for blackjack
 */
/* harmony default export */ var strategy = ([[, '2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'], ['5', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'], ['6', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'], ['7', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'], ['8', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'], ['9', 'H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['10', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'], ['11', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'], ['12', 'H', 'H', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'], ['13', 'S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'], ['14', 'S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'], ['15', 'S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'], ['16', 'S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'], ['17', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['18', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['19', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['20', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['S13', 'H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['S14', 'H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['S15', 'H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['S16', 'H', 'H', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['S17', 'H', 'D', 'D', 'D', 'D', 'H', 'H', 'H', 'H', 'H'], ['S18', 'D', 'D', 'D', 'D', 'D', 'S', 'S', 'H', 'H', 'H'], ['S19', 'S', 'S', 'S', 'S', 'D', 'S', 'S', 'S', 'S', 'S'], ['S20', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['2,2', 'P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'], ['3,3', 'P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'], ['4,4', 'H', 'H', 'H', 'P', 'P', 'H', 'H', 'H', 'H', 'H'], ['5,5', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'], ['6,6', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H', 'H'], ['7,7', 'P', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'], ['8,8', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'], ['9,9', 'P', 'P', 'P', 'P', 'P', 'S', 'P', 'P', 'S', 'S'], ['10,10', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'], ['A,A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P']]);
// CONCATENATED MODULE: ./src/engine.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function getBoard() {
  var playerCards = [sampleCard(), sampleCard()];
  var dealerCard = sampleCard(); // lean towards more interesting boards

  if (interestingness({
    playerCards: playerCards,
    dealerCard: dealerCard
  }) < Math.random()) return getBoard();
  var answer = getAnswer({
    dealerCard: dealerCard,
    playerCards: playerCards
  });
  return {
    playerCards: playerCards,
    dealerCard: dealerCard,
    answer: answer
  };
}

function sampleCard() {
  return cards[Math.floor(Math.random() * cards.length)];
}

function interestingness(_ref) {
  var playerCards = _ref.playerCards;
  // 21 is boring
  if (sumCards(playerCards) === 21) return 0; // soft hands are interesting

  if (playerCards.includes('A')) return 0.5; // pairs are interesting

  if (normalize(playerCards[0]) === normalize(playerCards[1])) {
    return sumCards(playerCards) === 20 ? 0.25 : 1;
  } // hands bellow 8 or above 17 are very boring


  if (sumCards(playerCards) < 8) return 0.04;
  if (sumCards(playerCards) > 17) return 0.04;
  return 0.15;
}
function getAnswer(_ref2) {
  var dealerCard = _ref2.dealerCard,
      playerCards = _ref2.playerCards;
  var rowItem = getRowItem(playerCards);
  var colItem = getColItem(dealerCard);
  var rowIndex = strategy.indexOf(strategy.find(function (row) {
    return row[0] === rowItem;
  }));
  var colIndex = strategy[0].indexOf(colItem);

  if (!strategy[rowIndex] || !strategy[rowIndex][colIndex]) {
    throw new Error("can't find ".concat(dealerCard, " with ").concat(playerCards, " (").concat(colItem, ", ").concat(rowItem, ")"));
  }

  return strategy[rowIndex][colIndex];
}

function getRowItem(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
      card1 = _ref4[0],
      card2 = _ref4[1];

  // pairs
  if (normalize(card1) === normalize(card2)) {
    return "".concat(normalize(card1), ",").concat(normalize(card2));
  } // soft


  if (card1 === 'A' || card2 === 'A') {
    return "S".concat(sumCards([card1, card2]));
  } // hard


  return "".concat(sumCards([card1, card2]));
}

function getColItem(card) {
  return "".concat(normalize(card));
}

function sumCards(cards) {
  return cards.reduce(function (sum, card) {
    return sum + cardValue(card);
  }, 0);
}

function cardValue(card) {
  return card === 'A' ? 11 : normalize(card);
}

function normalize(card) {
  return Number(card) || (card === 'A' ? 'A' : 10);
}

/* harmony default export */ var engine = ({
  getBoard: getBoard
});
// CONCATENATED MODULE: ./src/index.js


var root = document.querySelector('.app');
var state = {};
render();

function render() {
  var board = engine.getBoard();
  state = {
    answer: board.answer
  };
  root.innerHTML = '';
  root.appendChild(renderBoard(board));
}

function renderBoard(_ref) {
  var playerCards = _ref.playerCards,
      dealerCard = _ref.dealerCard;
  var board = document.createElement('div');
  [renderDealer(dealerCard), renderPlayerCards(playerCards), renderActions()].forEach(function (element) {
    board.appendChild(element);
  });
  return board;
}

function renderPlayerCards(playerCards) {
  var playerContainer = document.createElement('div');
  playerContainer.classList.add('player');
  playerCards.forEach(function (card) {
    playerContainer.appendChild(renderCard(card));
  });
  return playerContainer;
}

function renderDealer(dealerCard) {
  var dealerContainer = document.createElement('div');
  dealerContainer.classList.add('dealer');
  dealerContainer.appendChild(renderCard(dealerCard));
  return dealerContainer;
}

function renderActions() {
  var actionsContainer = document.createElement('div');
  actionsContainer.classList.add('actions');
  ['H', 'S', 'D', 'P'].forEach(function (action) {
    actionsContainer.appendChild(renderButton(action));
  });
  return actionsContainer;
}

function renderButton(action) {
  var button = document.createElement('div');
  button.classList.add('button');
  button.innerHTML = action;
  button.addEventListener('click', onAction);
  button.addEventListener('touch', onAction);
  return button;
}

function onAction(e) {
  root.classList.remove('wrong');
  root.classList.remove('fade');
  var guess = e.target.textContent;

  if (state.answer === guess) {
    render();
  } else {
    root.classList.add('wrong');
  }

  setTimeout(function () {
    root.classList.add('fade');
  });
}

function renderCard(card) {
  var cardEle = document.createElement('div');
  cardEle.innerHTML = card;
  cardEle.classList.add('card');
  return cardEle;
}

/***/ })
/******/ ]);