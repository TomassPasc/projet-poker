
//dealer

function dealer() {
    let deck = new Deck()
    deck.shuffle()
    //return [deck.cards.slice(0, 5), deck.cards.slice(5, 10)] retourne deux array de 5 cartes
    return deck.cards.slice(0,9)
  }



//création du deck
  class Deck {
    constructor() {
      this._cards = Card.values().map(
        v => Card.types().map(
          t => v + t
        )
      ).flat()
    }
  
    get cards() {
      return this._cards
    }
  
    shuffle() {
      let newCards = [];
  
      while(this._cards.length > 0) {
        let i = Math.floor(Math.random() * this._cards.length)
    
        newCards.push(this._cards[i])
        this._cards.splice(i, 1)
      }
  
      this._cards = newCards
    }
  }
  


//création des cartes

const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const VALUE_LABELS = 
  ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"]
const TYPES = ["d", "c", "h", "s"]

class Card {
  static values() {
    return VALUES
  }

  static valueLabels() {
    return VALUE_LABELS
  }

  static types() {
    return TYPES
  }

  constructor(label) {
    this.label = label
  }

  value() {
    return this.label.split('').slice(0, this.label.length - 1).join()
  }

  valueLabel() {
    return Card.valueLabels()[Card.values().indexOf(this.value())]
  }

  type() {
    return this.label.split('')[this.label.length-1]
  }

  score() {
    return parseInt(`${this.valueScore()}${this.typeScore()}`)
  }

  valueScore() {
    return Card.values().indexOf(this.value()) + 2
  }

  typeScore() {
    return Card.types().indexOf(this.type()) + 1
  }
}

          ///////////////////////////////////////
          
//création des variables pour l'id des cartes
var hero_card1 = document.getElementById('hero_card1')
var hero_card2 = document.getElementById('hero_card2')
var vilain_card1 = document.getElementById('vilain_card1')
var vilain_card2 = document.getElementById('vilain_card2')
var flop1 = document.getElementById('flop1')
var flop2 = document.getElementById('flop2')
var flop3 = document.getElementById('flop3')
var turn = document.getElementById('turn')
var river = document.getElementById('river')

//initialisation mains joueurs + board
var heroHand = []
var vilainHand = []
var board = []

//console.log(hero_card1)



function test(){
  var deckCard = dealer()
  //console.log(deckCard)
  
  heroHand.push(deckCard[0], deckCard[1])
  vilainHand.push(deckCard[2], deckCard[3])
  board.push(deckCard[4], deckCard[5], deckCard[6], deckCard[7], deckCard[8])
  //console.log(heroHand)
  //console.log(vilainHand)
  //console.log(board)

  //afficher les cartes 
  hero_card1.src = "assets/" + heroHand[0] + ".png"
  hero_card2.src = "assets/" + heroHand[1] + ".png"
  vilain_card1.src = "assets/" + vilainHand[0] + ".png"
  vilain_card2.src = "assets/" + vilainHand[1] + ".png"
  flop1.src = "assets/" + board[0] + ".png"
  flop2.src = "assets/" + board[1] + ".png"
  flop3.src = "assets/" + board[2] + ".png"
  turn.src = "assets/" + board[3] + ".png"
  river.src = "assets/" + board[4] + ".png"


  

}


