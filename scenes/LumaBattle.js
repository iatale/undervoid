export default class LumaBattle extends Phaser.Scene{
    constructor(){ super("LumaBattle"); }

    create(){
        this.add.text(120,200,"LUMA",{fill:"#ff00ff"});
        this.cameras.main.flash(500);
    }
}