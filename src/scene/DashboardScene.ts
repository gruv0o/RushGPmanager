import Phaser, { Scene } from 'phaser';

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'DashboardScene' });
    }

    preload(){
    }

    create(){
        this.CreateInterface();
    }

    update(time: number, delta: number): void {
    }

    private CreateInterface(){
        this.add.text(15,15,"Scuderia Ferrari", {
            fontSize: 34,
            color: '#ffffff'
        })
    }
}