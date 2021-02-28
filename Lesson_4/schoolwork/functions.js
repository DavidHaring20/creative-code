// // create a random function that given the parameters min and max generate a random value
// const maxValue = 0;
// const minValue = 0;
// let count = 0;

// function generateRandom(minValue, maxValue) {
//     let randomNumber = Math.random() * 100;
//     while (randomNumber < minValue || randomNumber > maxValue) {
//         randomNumber = Math.random() * 100;
//         count++;
//     }
//     if (randomNumber > minValue && randomNumber < maxValue) {
//         console.log("You got this number: " + randomNumber + " from " + count + ". try.");
//     }
// }

// generateRandom(90, 110);

random = new Util(5, 100);
console.log(random.generateRandom(5, 100));