import Title from "./scenes/Title.js";
import Boot from "./scenes/Boot.js";
import Overworld from "./scenes/Overworld.js";
import Battle from "./scenes/Battle.js";
import BossBattle from "./scenes/BossBattle.js";
import LumaBattle from "./scenes/LumaBattle.js";
import GameOver from "./scenes/GameOver.js";

const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    backgroundColor: "#000",
    physics: { default: "arcade" },
    scene: [Title, Boot, Overworld, Battle, BossBattle, LumaBattle, GameOver]
};

new Phaser.Game(config);