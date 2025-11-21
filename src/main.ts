import Phaser from 'phaser';
import MenuScene from './scene/MenuScene';
import PlayScene from './scene/PlayScene';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  scale: {
  mode: Phaser.Scale.RESIZE,
  parent: 'game',
  width: '100%',
  height: '100%'
},
  scene: [MenuScene, PlayScene],
  backgroundColor: '#050505'
};

new Phaser.Game(config);