import createJoystick from "../ui/MobileControls.js";
import SaveSystem from "../systems/SaveSystem.js";
import EmotionSystem from "../systems/EmotionSystem.js";

export default class Overworld extends Phaser.Scene{

    constructor(){ super("Overworld"); }

    init(payload){
        this.dataStore = payload.data;
    }

    create(){

        this.zones = [
            {name:"Umbral",color:0x444444},
            {name:"Ciudad",color:0x333366},
            {name:"Lago",color:0x003344},
            {name:"Ceniza",color:0x552200},
            {name:"Trono",color:0x000000}
        ];

        this.zone = this.zones[this.dataStore.progress];
        this.cameras.main.setBackgroundColor(this.zone.color);

        this.add.text(10,10,this.zone.name,{fill:"#fff"});
        this.add.text(10,30,"Derrota 3 ecos",{fill:"#aaa"});

        this.player = this.physics.add.sprite(180,500,null)
            .setSize(24,24)
            .setTint(0xaaaaaa);

        createJoystick(this,this.player);

        EmotionSystem.apply(this,this.dataStore);

        this.time.addEvent({
            delay:2500,
            loop:true,
            callback:()=>{

                if(this.dataStore.wins >=3){
                    this.dataStore.progress++;
                    this.dataStore.wins=0;
                    SaveSystem.save(this.dataStore);
                }

                if(this.dataStore.progress>=4){
                    this.scene.start("BossBattle",{data:this.dataStore});
                }
                else{
                    this.scene.start("Battle",{data:this.dataStore});
                }
            }
        });
    }
}