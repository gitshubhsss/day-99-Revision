let start=["januvary","july","march","august"];
//[ 'july', 'june', 'march', 'august' ]

// start[0]="july";
// start[1]="june"

start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
console.log(start);
