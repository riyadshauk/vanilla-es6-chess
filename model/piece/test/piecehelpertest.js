const assert = require('assert');
const PieceHelper = require('../src/piecehelper.js');

function testBothPiecesBelongToSamePlayer1() {
  let gameState = {};
  gameState.board = [
    ['R0','H0','B0','Q0','K0','B0','H0','R0'], // upper case: black pieces
    ['P0','P0','P0','P0','P0','P0','P0','P0'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p0','p0','p0','p0','p0','p0','p0','p0'], // lower case: white pieces
    ['r0','h0','b0','q0','k0','b0','h0','r0'] ];
  gameState.board.rowLength = 8; // yes, I am adding properties to the prototype of this particular Array.
  gameState.board.colLength = 8;
  gameState.playerWhite = 0;
  gameState.playerBlack = 1;
  gameState.player = gameState.playerWhite;
  const src = {r:6,c:0};
  const dst = {r:5,c:0};
  const samePlayer = PieceHelper.bothPiecesBelongToSamePlayer(gameState,src,dst);
  assert.equal(samePlayer,false);
}
function testBothPiecesBelongToSamePlayer2() {
  let gameState = {};
  gameState.board = [
    ['R0','H0','B0','Q0','K0','B0','H0','R0'], // upper case: black pieces
    ['P0','P0','P0','P0','P0','P0','P0','P0'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p0','p0','p0','p0','p0','p0','p0','p0'], // lower case: white pieces
    ['r0','h0','b0','q0','k0','b0','h0','r0'] ];
  gameState.board.rowLength = 8; // yes, I am adding properties to the prototype of this particular Array.
  gameState.board.colLength = 8;
  gameState.playerWhite = 0;
  gameState.playerBlack = 1;
  gameState.player = gameState.playerWhite;
  const src = {r:6,c:0};
  const dst = {r:6,c:1};
  const samePlayer = PieceHelper.bothPiecesBelongToSamePlayer(gameState,src,dst);
  assert.equal(samePlayer,true);
}
function testBothPiecesBelongToSamePlayer3() {
  let gameState = {};
  gameState.board = [
    ['R0','H0','B0','Q0','K0','B0','H0','R0'], // upper case: black pieces
    ['P0','P0','P0','P0','P0','P0','P0','P0'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p0','p0','p0','p0','p0','p0','p0','p0'], // lower case: white pieces
    ['r0','h0','b0','q0','k0','b0','h0','r0'] ];
  gameState.board.rowLength = 8; // yes, I am adding properties to the prototype of this particular Array.
  gameState.board.colLength = 8;
  gameState.playerWhite = 0;
  gameState.playerBlack = 1;
  gameState.player = gameState.playerWhite;
  const src = {r:6,c:0};
  const dst = {r:1,c:0};
  const samePlayer = PieceHelper.bothPiecesBelongToSamePlayer(gameState,src,dst);
  assert.equal(samePlayer,false);
}
function testBothPiecesBelongToSamePlayer4() {
  let gameState = {};
  gameState.board = [
    ['R0','H0','B0','Q0','K0','B0','H0','R0'], // upper case: black pieces
    ['P0','P0','P0','P0','P0','P0','P0','P0'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p0','p0','p0','p0','p0','p0','p0','p0'], // lower case: white pieces
    ['r0','h0','b0','q0','k0','b0','h0','r0'] ];
  gameState.board.rowLength = 8; // yes, I am adding properties to the prototype of this particular Array.
  gameState.board.colLength = 8;
  gameState.playerWhite = 0;
  gameState.playerBlack = 1;
  gameState.player = gameState.playerWhite;
  const src = {r:1,c:0};
  const dst = {r:1,c:1};
  const samePlayer = PieceHelper.bothPiecesBelongToSamePlayer(gameState,src,dst);
  assert.equal(samePlayer,true);
}
testBothPiecesBelongToSamePlayer1();
testBothPiecesBelongToSamePlayer2();
testBothPiecesBelongToSamePlayer3();
testBothPiecesBelongToSamePlayer4();