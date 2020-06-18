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


function afficheCarte(heroHand, vilainHand){
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