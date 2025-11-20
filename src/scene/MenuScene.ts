import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload(this : Phaser.Scene) {
        
    }

    create(this : Phaser.Scene) {
        this.add.text(screen.width / 2, 50, 'Rush GP Manager', {
            fontSize: '32px',
            color: "#ffffff"
        }).setOrigin(0.5);
    }

}