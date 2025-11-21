import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayScene' });
    }

    preload(){
        this.loadData()
    }

    create(){
        
    }

    update(time: number, delta: number): void {
        
    }

    private loadData(){
        this.load.json('cars', 'src/data/hardcoded_data/Cars.json');
        this.load.json('drivers', 'src/data/hardcoded_data/Drivers.json');
        this.load.json('teams', 'src/data/hardcoded_data/Teams.json');
        this.load.json('tracks', 'src/data/hardcoded_data/Tracks.json');
    }
}