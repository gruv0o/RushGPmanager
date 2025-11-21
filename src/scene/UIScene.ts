import Phaser from "phaser";

export default class uiScene extends Phaser.Scene {
    constructor() { 
        super({ key: 'UIScene' })
    }

    create() {
        console.log("UIScene works.")
    }
}