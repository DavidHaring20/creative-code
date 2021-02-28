class Util {
    constructor(maxValue, minValue) {
        this.maxValue = maxValue;
        this.minValue = minValue;
    }
    
    generateRandom(minValue, maxValue) {
        let count = 0;
        let randomNumber = Math.random() * 100;

        while (randomNumber < minValue || randomNumber > maxValue) {
            randomNumber = Math.random() * 100;
            count++;
        }
        if (randomNumber > this.minValue && randomNumber < this.maxValue) {
            console.log("You got this number: " + randomNumber + " from " + count + ". try.");
        }
    }
}