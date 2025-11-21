import Phaser from "phaser";
import Button from "../components/Button";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        
    }

    create() {
        this.add.text(this.scale.width / 2, 150, 'Rush GP Manager', {
            fontSize: '45px',
            color: "#ffffff"
        }).setOrigin(0.5);

        new Button(this, this.scale.width / 2, 250, "JOUER", () => this.startGame(), true);
        new Button(this, this.scale.width / 2, 350, "OPTIONS", () => this.options(), false);
    }

    private startGame() {
        this.scene.start('PlayScene');
    }

    private options(){
        console.log("options");
    }
}