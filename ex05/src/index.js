// Only change code below this line
function myPetsFunction(pets) {
    myPetsArray = [
        {
            animalType: "Dog",
            name: [
                "Pujdo"
            ]
        },
        {
            animalType: "Cat",
            category: [
                "Maca"
            ]
        },
        {
            animalType: "Bird",
            name: [
                "Tweety"
            ]
        },
    ];
    myPetsArray[1].category[0];
    
}
// Only change code above this line

console.log(myPetsFunction(pets)); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;