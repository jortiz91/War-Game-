//GLOBAL VARIABLES
const p1card = document.querySelector('#p1deck')
const p2card = document.querySelector('#p2deck')
const playerWon1 = document.getElementById('P1-Won')
const playerWon2 = document.getElementById('P2-Won')
const playerScore1 = document.getElementById('player1score')
const playerScore2 = document.getElementById('player2score')
let deckB = []
let deckA = []
let p1nextCard
let p2nextCard
const deck = [
  {
    name: 'Ace',
    path: 'images/spades/spades-A.svg',
    value: 13,
    suit: 'Spades'
  },
  {
    name: 'King',
    path: 'images/spades/spades-K.svg',
    value: 12,
    suit: 'Spades'
  },
  {
    name: 'Queen',
    path: 'images/spades/spades-Q.svg',
    value: 11,
    suit: 'Spades'
  },
  {
    name: 'Jack',
    path: 'images/spades/spades-J.svg',
    value: 10,
    suit: 'Spades'
  },
  {
    name: '10',
    path: 'images/spades/spades-r10.svg',
    value: 9,
    suit: 'Spades'
  },
  {
    name: '9',
    path: 'images/spades/spades-r09.svg',
    value: 8,
    suit: 'Spades'
  },
  {
    name: '8',
    path: 'images/spades/spades-r08.svg',
    value: 7,
    suit: 'Spades'
  },
  {
    name: '7',
    path: 'images/spades/spades-r07.svg',
    value: 6,
    suit: 'Spades'
  },
  {
    name: '6',
    path: 'images/spades/spades-r06.svg',
    value: 5,
    suit: 'Spades'
  },
  {
    name: '5',
    path: 'images/spades/spades-r05.svg',
    value: 4,
    suit: 'Spades'
  },
  {
    name: '4',
    path: 'images/spades/spades-r04.svg',
    value: 3,
    suit: 'Spades'
  },
  {
    name: '3',
    path: 'images/spades/spades-r03.svg',
    value: 2,
    suit: 'Spades'
  },
  {
    name: '2',
    path: 'images/spades/spades-r02.svg',
    value: 1,
    suit: 'Spades'
  },
  {
    name: 'Ace',
    path: 'images/hearts/hearts-A.svg',
    value: 13,
    suit: 'Hearts'
  },
  {
    name: 'King',
    path: 'images/hearts/hearts-K.svg',
    value: 12,
    suit: 'Hearts'
  },
  {
    name: 'Queen',
    path: 'images/hearts/hearts-Q.svg',
    value: 11,
    suit: 'Hearts'
  },
  {
    name: 'Jack',
    path: 'images/hearts/hearts-J.svg',
    value: 10,
    suit: 'Hearts'
  },
  {
    name: '10',
    path: 'images/hearts/hearts-r10.svg',
    value: 9,
    suit: 'Hearts'
  },
  {
    name: '9',
    path: 'images/hearts/hearts-r09.svg',
    value: 8,
    suit: 'Hearts'
  },
  {
    name: '8',
    path: 'images/hearts/hearts-r08.svg',
    value: 7,
    suit: 'Hearts'
  },
  {
    name: '7',
    path: 'images/hearts/hearts-r07.svg',
    value: 6,
    suit: 'Hearts'
  },
  {
    name: '6',
    path: 'images/hearts/hearts-r06.svg',
    value: 5,
    suit: 'Hearts'
  },
  {
    name: '5',
    path: 'images/hearts/hearts-r05.svg',
    value: 4,
    suit: 'Hearts'
  },
  {
    name: '4',
    path: 'images/hearts/hearts-r04.svg',
    value: 3,
    suit: 'Hearts'
  },
  {
    name: '3',
    path: 'images/hearts/hearts-r03.svg',
    value: 2,
    suit: 'Hearts'
  },
  {
    name: '2',
    path: 'images/hearts/hearts-r02.svg',
    value: 1,
    suit: 'Hearts'
  },
  {
    name: 'Ace',
    path: 'images/clubs/clubs-A.svg',
    value: 13,
    suit: 'Clubs'
  },
  {
    name: 'King',
    path: 'images/clubs/clubs-K.svg',
    value: 12,
    suit: 'Clubs'
  },
  {
    name: 'Queen',
    path: 'images/clubs/clubs-Q.svg',
    value: 11,
    suit: 'Clubs'
  },
  {
    name: 'Jack',
    path: 'images/clubs/clubs-J.svg',
    value: 10,
    suit: 'Clubs'
  },
  {
    name: '10',
    path: 'images/clubs/clubs-r10.svg',
    value: 9,
    suit: 'Clubs'
  },
  {
    name: '9',
    path: 'images/clubs/clubs-r09.svg',
    value: 8,
    suit: 'Clubs'
  },
  {
    name: '8',
    path: 'images/clubs/clubs-r08.svg',
    value: 7,
    suit: 'Clubs'
  },
  {
    name: '7',
    path: 'images/clubs/clubs-r07.svg',
    value: 6,
    suit: 'Clubs'
  },
  {
    name: '6',
    path: 'images/clubs/clubs-r06.svg',
    value: 5,
    suit: 'Clubs'
  },
  {
    name: '5',
    path: 'images/clubs/clubs-r05.svg',
    value: 4,
    suit: 'Clubs'
  },
  {
    name: '4',
    path: 'images/clubs/clubs-r04.svg',
    value: 3,
    suit: 'Clubs'
  },
  {
    name: '3',
    path: 'images/clubs/clubs-r03.svg',
    value: 2,
    suit: 'Clubs'
  },
  {
    name: '2',
    path: 'images/clubs/clubs-r02.svg',
    value: 1,
    suit: 'Clubs'
  },
  {
    name: 'Ace',
    path: 'images/diamonds/diamonds-A.svg',
    value: 13,
    suit: 'Diamonds'
  },
  {
    name: 'King',
    path: 'images/diamonds/diamonds-K.svg',
    value: 12,
    suit: 'Diamonds'
  },
  {
    name: 'Queen',
    path: 'images/diamonds/diamonds-Q.svg',
    value: 11,
    suit: 'Diamonds'
  },
  {
    name: 'Jack',
    path: 'images/diamonds/diamonds-J.svg',
    value: 10,
    suit: 'Diamonds'
  },
  {
    name: '10',
    path: 'images/diamonds/diamonds-r10.svg',
    value: 9,
    suit: 'Diamonds'
  },
  {
    name: '9',
    path: 'images/diamonds/diamonds-r09.svg',
    value: 8,
    suit: 'Diamonds'
  },
  {
    name: '8',
    path: 'images/diamonds/diamonds-r08.svg',
    value: 7,
    suit: 'Diamonds'
  },
  {
    name: '7',
    path: 'images/diamonds/diamonds-r07.svg',
    value: 6,
    suit: 'Diamonds'
  },
  {
    name: '6',
    path: 'images/diamonds/diamonds-r06.svg',
    value: 5,
    suit: 'Diamonds'
  },
  {
    name: '5',
    path: 'images/diamonds/diamonds-r05.svg',
    value: 4,
    suit: 'Diamonds'
  },
  {
    name: '4',
    path: 'images/diamonds/diamonds-r04.svg',
    value: 3,
    suit: 'Diamonds'
  },
  {
    name: '3',
    path: 'images/diamonds/diamonds-r03.svg',
    value: 2,
    suit: 'Diamonds'
  },
  {
    name: '2',
    path: 'images/diamonds/diamonds-r02.svg',
    value: 1,
    suit: 'Diamonds'
  }
]
//FUNCTIONS

let flipCard = () => {
  setTimeout(() => {
    p1card.setAttribute('src', 'images/backs/red.svg')
    p2card.setAttribute('src', 'images/backs/red.svg')
  }, 500)
}
const shuffle = (deck) => {
  //used Fisher-Yates Shuffle https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

const splitDeck = () => {
  deckA = deck
  deckB = deckA.splice(0, 26)
}
const startGame = () => {
  shuffle(deck)
  splitDeck()
}

const playCard = (playerDeck) => {
  if (playerDeck.length === 0) {
    alert('The deck is empty!')
    return
  }
  let playedCard = playerDeck.shift()
  console.log(playedCard)
  return playedCard
}

const compareCards = (c1, c2) => {
  if (c1.value > c2.value) {
    playerWon1.innerHTML = 'Player 1 Won!'
    deckA.push(c1, c2)
    playerWon2.innerHTML = ''
    flipCard()
  } else if (c2.value > c1.value) {
    playerWon2.innerHTML = 'Player 2 Won!'
    deckB.push(c1, c2)
    flipCard()
    playerWon1.innerHTML = ''
  } else {
    console.log('War!')

    let p1Wardeck = []
    let p2Wardeck = []
    for (let i = 0; i < 4; i++) {
      if (deckA.length === 0) {
        alert('Player2 Wins!')
        startGame()
        return
      }
      let drawnCard = deckA.shift()
      p1Wardeck.push(drawnCard)
    }
    for (let i = 0; i < 4; i++) {
      if (deckB.length === 0) {
        alert('Player1 Wins!')
        startGame()
      }
      let drawnCard = deckB.shift()
      p2Wardeck.push(drawnCard)
    }
    console.log(p1Wardeck, p2Wardeck)
    if (p1Wardeck[3].value > p2Wardeck[3].value) {
      deckA.push(c1, c2)
      p1Wardeck.forEach((card) => deckA.push(card))
      p2Wardeck.forEach((card) => deckA.push(card))
      console.log(deckA.length, deckB.length)
      playerWon1.innerHTML = 'Player 1 Won War'
      flipCard()
    } else if (p2Wardeck[3].value > p1Wardeck[3].value) {
      deckB.push(c1, c2)
      p1Wardeck.forEach((card) => deckB.push(card))
      p2Wardeck.forEach((card) => deckB.push(card))

      playerWon2.innerHTML = 'Player 2 Won War'
      flipCard()
    } else {
      for (let i = 0; i < 4; i++) {
        let drawnCard = deckA.shift()
        p1Wardeck.push(drawnCard)
        for (let i = 0; i < 4; i++) {
          let drawnCard = deckB.shift()
          p2Wardeck.push(drawnCard)
        }
        if (
          p1Wardeck[p1Wardeck.length - 1].value >
          p2Wardeck[p2Wardeck.length - 1].value
        ) {
          deckA.push(c1, c2)
          p1Wardeck.forEach((card) => deckA.push(card))
          p2Wardeck.forEach((card) => deckA.push(card))
          console.log(deckA.length, deckB.length)
          flipCard()
        }
      }
    }
  }
}

//EVENTLISTNERS
p1card.addEventListener('click', () => {
  p1nextCard = playCard(deckA)
  p1card.setAttribute('src', p1nextCard.path)
  p2nextCard = playCard(deckB)
  p2card.setAttribute('src', p2nextCard.path)
  compareCards(p1nextCard, p2nextCard)
})

const playButton = document.getElementById('play')
playButton.addEventListener('click', () => {
  startGame()
  alert('Deck is Dealt!')
})
