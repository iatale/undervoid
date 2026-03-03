export default class Title extends Phaser.Scene{
    constructor(){ super("Title"); }

    create(){
        this.add.text(70,250,"UNDERVOID",{fontSize:"40px",fill:"#fff"});
        this.add.text(110,350,"TAP TO BEGIN",{fill:"#aaa"});

        this.input.on("pointerdown",()=>{
            this.scene.start("Boot");
        });
    }
}