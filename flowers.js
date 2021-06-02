const flowers = [
    {
        color: "" ,
        species: "" ,
        price: 0, 
        id: 0
    },

]


/*
This function should add an `id` property
to the object that was sent to the function.
The value of the `id` property should be 1
greater than the current maximum `id` in the
array.

Once the `id` property has been added to the,
object, the object should then be put into the
`flowers` array.
*/
const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1 
    if (lastIndex === -1) {
        const newId = 1
        return newId
    }
    const currentLastFlower = flowers[lastIndex]
    const lastFlowerId = currentLastFlower.id
    const newId = lastFlowerId + 1 
    flowerObject.id = newId
    flowers.push(flowerObject)
}

const rose = {
    color: "white",
    species: "rose",
    price: .9
}
const tulip = {
    color: "red",
    species: "tulip",
    price: 1.1
}
addFlower(rose)
addFlower(tulip)
console.log("All Flowers", flowers)


/*
    Write a for..of loop that iterate the array
    of flowers, and if the price of a flower is
    greater than or equal to 1.00, it should be
    added to the `expensiveFlowers` array.
*/
const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if(flower.price >= 1) {
            expensiveFlowers.push(flower)
            console.log("Expensive Flowers", expensiveFlowers)
        }
    }

    return expensiveFlowers  // Do not change this code
}
findExpensiveFlowers()






// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

