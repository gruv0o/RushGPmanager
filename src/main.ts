import Phaser from 'phaser';
import MenuScene from './scene/MenuScene';
import PlayScene from './scene/PlayScene';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  width: screen.width,
  height: screen.height,
  scene: [MenuScene, PlayScene],
  backgroundColor: '#202040'
};

new Phaser.Game(config);