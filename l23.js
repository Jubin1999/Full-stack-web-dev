// const num = new Array(1,2,3,4,5,6,7,8,9);

// //Push
// num.push(10)

// //console.log(num[num.length-1])
// //Unshift
// num.unshift(0)
// num.pop()
// //shift
// num.shift()

// //num[0] = {num:80}
const names = ['Aman', 'Dhanvan', 'Akash', 'Akshit', 'Nihal','Dip', 'Jubin']
// names.indexOf('Jubin');
// //lastIndexOf
// names.lastIndexOf('Jubin')
// names.includes('Akshit')
//console.log(names.includes('Akshit',2))

let channels = [{
    name: 'Apna college',
    subscriber: 10000
}, {
    name: 'Apni kaksha',
    subscriber: 20000
}, {
    name: 'Aman dhatarwal',
    subscriber: 50000
}];

// console.log(channels.includes({
//     name: 'Apna college',
//     subscriber: 10000
// }))

let names1 =  ['Aman', 'Dhanvan', 'Akash']
let names2 =  ['Akshit', 'Neha', 'Supriya']
//let names3 = names1.concat(names2)
let names3 = [...names1,...names2]
//console.log(channels.find(element => element.name === 'Apni kaksha'))

//console.log(names1.concat(names2))
//console.log(names3.slice(3,5))
//console.log(names3)

//For loop
for(let i=0; i<names.length;i++){
    //console.log(names[i])
}

//For of 
for(let name of names){
    //console.log(name)
}

//For-each
names.forEach(function(name,index){
    //console.log(name, index);
})

//Join 
let student = ['S','h','i','v','a']
//console.log(student.join(''))
student = student.join('_');

//Split
console.log(student.split('_'))

let cities = [
    {name: 'Mumbai', population: 3792621},
    {name: 'Delhi', population: 8175133},
    {name: 'Bangalore', population: 2695598},
    {name: 'Chennai', population: 2099451},
    {name: 'Lucknow', population: 1526006}
];

//console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))