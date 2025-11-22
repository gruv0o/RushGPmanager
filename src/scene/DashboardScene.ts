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
        this.SideBar();
    }

    private SideBar(){
        const teamName = this.add.text(15 ,25 ,"Scuderia Ferrari", {
            fontSize: '24px',
            color: '#ffffff'
        })
        const teamBudget = this.add.text(15,50,'Budget: 100,000$', {
            fontSize: '14px',
            color: '#30ff30'
        });
        const sideBarBg = this.add.rectangle( 0, 0, 600, this.scale.height * 2, 0x101010)
        
        this.add.container( 0, 0, [ sideBarBg, teamName, teamBudget ]);

    }
}