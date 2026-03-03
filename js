// EmotionSystem.js

class EmotionSystem {
    constructor() {
        this.emotions = {};
    }

    trackEmotion(emotion, intensity) {
        this.emotions[emotion] = intensity;
    }

    getEmotion(emotion) {
        return this.emotions[emotion] || null;
    }

    getAllEmotions() {
        return this.emotions;
    }
}

// Example usage
const emotionSystem = new EmotionSystem();
emotionSystem.trackEmotion('happiness', 10);
console.log(emotionSystem.getEmotion('happiness')); // 10
console.log(emotionSystem.getAllEmotions()); // { happiness: 10 }
