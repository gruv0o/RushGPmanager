import Phaser from 'phaser';

export default class Button extends Phaser.GameObjects.Container {
    private bg: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, label: string, callback: Function, isActive: boolean) {
        super(scene, x, y);
    
        // Couleurs selon l'état
        const bgColor = isActive ? 0x606090 : 0x606060;
        const textColor = isActive ? '#ffffff' : '#cccccc';
    
        // Créer le fond et le texte (toujours)
        this.bg = scene.add.rectangle(0, 0, 200, 60, bgColor);
        this.text = scene.add.text(0, 0, label, {
            fontSize: '22px',
            color: textColor
        }).setOrigin(0.5);
    
        this.add([this.bg, this.text]);
        this.setSize(200, 60);
    
        // Rendre interactif SEULEMENT si actif
        if (isActive) {
            this.setInteractive({ useHandCursor: true })
                .on('pointerover', () => this.onHover())
                .on('pointerout', () => this.onOut())
                .on('pointerdown', () => this.onDown())
                .on('pointerup', () => {
                    this.onUp();
                    callback();
                });
        }
    
        scene.add.existing(this);
    }
    

    private onHover(){
        this.bg.setFillStyle(0xffffff);
        this.setScale(1.05);
    }

    private onOut(){
        this.bg.setFillStyle(0x606090);
        this.setScale(1);
    }

    private onDown(){
        this.setScale(0.98);
    }

    private onUp(){
        this.setScale(1);
    }
}