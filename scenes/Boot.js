import SaveSystem from "../systems/SaveSystem.js";

export default class Boot extends Phaser.Scene{

    constructor(){ super("Boot"); }

    create(){
        let data = SaveSystem.load();
        this.scene.start("Overworld",{data});
    }
}