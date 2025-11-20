import Phaser from 'phaser';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: screen.width,
  height: screen.height,
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
  this.add.text(screen.width / 2,screen.height / 2, 'Hello Phaser!', {
    fontSize: '32px',
    color: '#ffffff'
  }).setOrigin(0.5);
}

function update (){

}
