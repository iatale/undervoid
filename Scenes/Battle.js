import SaveSystem from "../systems/SaveSystem.js";

export default class Battle extends Phaser.Scene{

    constructor(){ super("Battle"); }

    init(payload){
        this.dataStore = payload.data;
    }

    create(){

        let difficulty = this.dataStore.progress;

        this.enemyHP = 60 + difficulty*20;
        this.bulletSpeed = 200 + difficulty*30;

        this.add.text(20,20,"Eco",{fill:"#fff"});
        this.hpText = this.add.text(20,50,"HP: "+this.enemyHP,{fill:"#fff"});

        this.soul = this.physics.add.rectangle(180,500,16,16,0xffffff);

        this.hpBar = this.add.rectangle(180,620,300,10,0xff0000);

        this.spawnPattern();

        this.createButton("Confrontar",520,()=>{
            this.enemyHP-=20;
            this.dataStore.violence++;
            this.endTurn();
        });

        this.createButton("Comprender",560,()=>{
            this.enemyHP-=10;
            this.dataStore.mercy++;
            this.endTurn();
        });

        this.createButton("Reflejar",600,()=>{
            this.enemyHP-=15;
            this.dataStore.reflection++;
            this.endTurn();
        });
    }

    spawnPattern(){
        this.time.addEvent({
            delay:800,
            loop:true,
            callback:()=>{
                let bullet = this.physics.add.rectangle(
                    Phaser.Math.Between(20,340),
                    100,8,8,0xff0000
                );
                bullet.body.setVelocityY(this.bulletSpeed);

                this.physics.add.overlap(this.soul,bullet,()=>{
                    this.dataStore.hp-=10;
                    this.updateHP();
                    if(this.dataStore.hp<=0){
                        this.scene.start("GameOver",{data:this.dataStore});
                    }
                });
            }
        });
    }

    updateHP(){
        this.hpBar.width=(this.dataStore.hp/100)*300;
    }

    endTurn(){
        this.hpText.setText("HP: "+this.enemyHP);

        if(this.enemyHP<=0){
            this.dataStore.wins++;
            SaveSystem.save(this.dataStore);
            this.scene.start("Overworld",{data:this.dataStore});
        }
    }

    createButton(text,y,callback){
        this.add.text(90,y,text,{fill:"#fff"})
            .setInteractive()
            .on("pointerdown",callback);
    }
}