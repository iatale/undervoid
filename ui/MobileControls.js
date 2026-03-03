export default function createJoystick(scene, player){

    scene.input.on("pointermove", pointer=>{
        if(pointer.isDown){
            scene.physics.moveTo(player, pointer.x, pointer.y, 200);
        }
    });

    scene.input.on("pointerup", ()=>{
        player.body.setVelocity(0);
    });
}