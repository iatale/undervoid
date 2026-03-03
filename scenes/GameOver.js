export default class GameOver extends Phaser.Scene{
    constructor(){ super("GameOver"); }

    create(){
        this.add.text(100,300,"YOU FADED",{fill:"#ff0000"});
        this.input.on("pointerdown",()=>{
            this.scene.start("Title");
        });
    }
}