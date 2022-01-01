let counter = {
    count: 0,
    increment: function(){
        counter.count++;
    }
}

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);

var count = 0;
function incrementCounter(){
    this.count++;
    console.log(this);
incrementCounter();
increm}

incrementCounter();
incrementCounter();
entCounter();
console.log(this);


function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.namr + ' started');
        console.log(this);
    }
}

let swift = new Car('Swift');
swift.start();