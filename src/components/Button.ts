import Phaser from 'phaser';

export default class Button extends Phaser.GameObjects.Container {
    private bg: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    constructor (scene: Phaser.Scene, x: number, y: number, label: string, callback: Function) {
    super (scene, x, y);

    this.text = scene.add.text(0,0, label, {
        fontSize: '22px',
        color: '#ffffff'
    }).setOrigin(0.5);

    this.bg = scene.add.rectangle(0, 0, 200, 60, 0x3498db);

    this.add([this.bg, this.text]);

    this.setSize(200,600)
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.onHover ())
        .on('pointerout', () => this.onOut ())
        .on('pointerdown', () => this.onDown())
        .on('pointerup', () => {
            this.onUp();
            callback();
        });
        scene.add.existing(this);
    }

    private onHover(){
        this.bg.setFillStyle(0x5dade2);
        this.setScale(1.05);
    }

    private onOut(){
        this.bg.setFillStyle(0x3498db);
        this.setScale(1);
    }

    private onDown(){
        this.setScale(0.98);
    }

    private onUp(){
        this.setScale(1.5);
    }
}