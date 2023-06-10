//objects 

const fruits = {
    name: "apple",
    cost: 0.2,
    costOfKilo: 1.20,
    description: "originates from spain"
}

const car = {
    name: "bmw", 
    model: "150",
    list: ["bmw1","bmw2","bmw3"],
    date: 2023,
    nameAndModel: function(){
        return this.list[2] + " " + this.date
    }
}

carName = car.nameAndModel()

console.log(carName)

