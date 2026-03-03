import SaveSystem from "../systems/SaveSystem.js";

export default class BossBattle extends Phaser.Scene{

    constructor(){ super("BossBattle"); }

    init(payload){
        this.dataStore = payload.data;
    }

    create(){

        this.enemyHP = 200;

        this.add.text(60,20,"Rök",{fill:"#ff4444"});
        this.hpText=this.add.text(20,50,"HP:200",{fill:"#fff"});

        this.soul=this.physics.add.rectangle(180,500,16,16,0xffffff);

        this.spawn();

        this.createButton("Confrontar",560,()=>{
            this.enemyHP-=30;
            this.update();
        });
    }

    spawn(){
        this.time.addEvent({
            delay:600,
            loop:true,
            callback:()=>{
                let bullet=this.physics.add.rectangle(
                    Phaser.Math.Between(20,340),
                    100,10,10,0xff5500
                );
                bullet.body.setVelocityY(250);
            }
        });
    }

    update(){
        this.hpText.setText("HP:"+this.enemyHP);
        if(this.enemyHP<=0){
            SaveSystem.save(this.dataStore);
            this.scene.start("Title");
        }
    }

    createButton(text,y,callback){
        this.add.text(90,y,text,{fill:"#fff"})
            .setInteractive()
            .on("pointerdown",callback);
    }
}