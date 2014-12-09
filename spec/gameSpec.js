'use strict';

var Game = require('../src/game');

describe('Gutter game', function(){

  var game = new Game();

  it('Scores 0 on a gutter game', function(){
    for(var i = 0; i < 20; i++){
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });

  it('Scores 10 on a normal-ish game', function(){
    for(var i = 0; i < 19; i++){
      game.roll(0);
    }
    game.roll(10);
    expect(game.score).toEqual(10);
  });

});