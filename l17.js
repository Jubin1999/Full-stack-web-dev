let animal = {
    name: "cow",
    legs: 4
}
//dot notation
console.log(animal.name);


let legsProp = "legs"
//Bracket notation
console.log(animal[legsProp]);

//Array
let selectBooks = ["The rudest book ever", "Think and grow rich", "Invisible man"]
console.log(selectBooks.length)

//Function

function namasteWorld(name, lastName){
    console.log("Namaste " + name + " " + lastName);
}

namasteWorld("deori", "gi")
namasteWorld("deep", "deori")

function addition(a, b){
    return a+b;
}

console.log(addition(5,5))
