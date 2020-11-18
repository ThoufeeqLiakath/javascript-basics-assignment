// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
let Fruit = function (name, color, pricePerKg) {
    this.name = name;
    this.color = color;
    this.pricePerKg = pricePerKg;
};

let Fruits = [];
Fruits.push(new Fruit('Apple', 'Red', 100));
Fruits.push(new Fruit('Orange', 'Orange', 50));
Fruits.push(new Fruit('Banana', 'Yellow', 20));

let GetFruitByName = (name) => {
    if (typeof name != "string")
        return null;
    let currentFruit = Fruits.find(x => x.name == name);
    if (currentFruit == null || currentFruit == undefined)
        return null;
    return 'Color of ' + name + ' : ' + currentFruit.color + '\n' +
        'Price per KG of ' + name + ' : ' + currentFruit.pricePerKg;

};