import Phaser from 'phaser';
import MenuScene from './scene/MenuScene';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: screen.width,
  height: screen.height,
  scene: [MenuScene],
  backgroundColor: '#101015'
};

new Phaser.Game(config);