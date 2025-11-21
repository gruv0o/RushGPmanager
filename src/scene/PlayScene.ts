import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayScene' });
    }

    preload(){
        this.loadData(this)
    }

    create(){

    }

    update(time: number, delta: number): void {
        
    }

    private loadData(scene: Phaser.Scene){
        scene.load.json('cars', 'src/data/hardcoded_data/Cars.json');
        scene.load.json('drivers', 'src/data/hardcoded_data/Drivers.json');
        scene.load.json('teams', 'src/data/hardcoded_data/Teams.json');
        scene.load.json('tracks', 'src/data/hardcoded_data/Tracks.json');
    }
}