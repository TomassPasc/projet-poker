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
var scoreHero = []
var scoreVilain = []
var gagnant = []

//console.log(hero_card1)



function game(){
  var deckCard = dealer()
  
  
  heroHand.push(deckCard[0], deckCard[1])
  vilainHand.push(deckCard[2], deckCard[3])
  board.push(deckCard[4], deckCard[5], deckCard[6], deckCard[7], deckCard[8])

  //affiche les cartes 
  hero_card1.src = "assets/" + heroHand[0] + ".png"
  hero_card2.src = "assets/" + heroHand[1] + ".png"
  vilain_card1.src = "assets/" + vilainHand[0] + ".png"
  vilain_card2.src = "assets/" + vilainHand[1] + ".png"
  flop1.src = "assets/" + board[0] + ".png"
  flop2.src = "assets/" + board[1] + ".png"
  flop3.src = "assets/" + board[2] + ".png"
  turn.src = "assets/" + board[3] + ".png"
  river.src = "assets/" + board[4] + ".png"

  //meilleur combo
  scoreHero = bestCombo(heroHand.concat(board))
  scoreVilain = bestCombo(vilainHand.concat(board))
  gagnant = compareCombos(scoreHero,scoreVilain)

  console.log(scoreHero)
  console.log(scoreVilain)
  console.log(gagnant)

  if (gagnant == scoreHero){
    console.log("Hero a gagné")
  }
  else {
    console.log("vilain a gagné")
  }

}


