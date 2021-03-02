let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
};
  
for (let i in car) {
    console.log(i, car[i]);
}

let fruits = ["Apple", "Banana", "Orange"];

for ( let i in fruits) {
    console.log(i, fruits[i]);
}