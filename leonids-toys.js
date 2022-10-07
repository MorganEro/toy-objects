//1. define 3 toys and assign to different variable names. 2. use full names. 3. describe in full detail 4. make them an array
const toys = [
    {
        id: 1,
        category: "airPlane",
        name: "Fighter Jet",
        color: "red",
        colorTwo: "blue",
        numberInStock: 4,
        isle: 4,
        price: 5.00
},

{
        id: 2,
        category: "dollHouse",
        name: "Barbie Doll House",
        color: "white",
        colorTwo: "brown",
        numberInStock: 2,
        isle: 4,
        price: 23.00
},

{
        id: 3,
        category: "sailBoat",
        name: "Gilligan's Boat",
        color: "blue",
        colorTwo: "light blue",
        numberInStock: 3,
        isle: 1,
        price: 15.00
}
]

const theDestroyer = {
        id: 4,
        category: "robot",
        name: "The Destroyer",
        color: "white",
        colorTwo: "red",
        numberInStock: 6,
        isle: 2,
        price: 22.00
}
const littleTitan = {
        id: 5,
        category: "sailBoat",
        name: "Little Titan",
        color: "white",
        colorTwo: "green",
        numberInStock: 4,
        isle: 1,
        price: 20.00
}
toys.push(theDestroyer, littleTitan)
const toyToFind = 4


for (priceChange of toys) {
        priceChange.price = priceChange.price *1.05
        }

/*for (const details of toys) {
        console.log(details.name)

}*/

for (catalog of toys) {
        if (catalog.id === toyToFind ) {
        console.log(`The ${catalog.name} is located on isle ${catalog.isle}. It is $${catalog.price} and there are still ${catalog.numberInStock} left in the store. Come and get one while supplies last!`)
        }
}

