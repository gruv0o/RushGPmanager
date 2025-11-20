import Phaser from 'phaser';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: "preload",
    create: "create",
    update: "update"
  }
};

var game = new Phaser.Game(config);

function preload (){

}

function create (){

}

function update (){

}

//https://phaser.io/tutorials/making-your-first-phaser-3-game/part1