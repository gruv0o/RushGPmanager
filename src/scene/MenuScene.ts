import Phaser from "phaser";
import Button from "../components/Button";

var middleOfScn = screen.width / 2;

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        
    }

    create() {
        this.add.text(middleOfScn, 50, 'Rush GP Manager', {
            fontSize: '32px',
            color: "#ffffff"
        }).setOrigin(0.5);

        new Button(this, middleOfScn, 250, "JOUER", () => this.startGame(), true);
        new Button(this, middleOfScn, 350, "OPTIONS", () => this.options(), false);
    }

    private startGame() {
        this.scene.start('PlayScene');
    }

    private options(){
        console.log("options");
    }
}