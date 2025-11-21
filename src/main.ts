import Phaser from 'phaser';
import MenuScene from './scene/MenuScene';
import DashboardScene from './scene/DashboardScene';

// Configuration du jeu
var config = {
  type: Phaser.AUTO,
  scale: {
  mode: Phaser.Scale.RESIZE,
  parent: 'game',
  width: '100%',
  height: '100%'
},
  scene: [MenuScene, DashboardScene],
  backgroundColor: '#050505'
};

new Phaser.Game(config);