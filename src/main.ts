import Phaser from 'phaser';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload (){

}

function create (){
  this.add.text(400,300, 'Hellp Phaser!', {
    fontSize: '32px',
    color: '#ffffff'
  }).setOrigin(0.5);
}

function update (){

}
