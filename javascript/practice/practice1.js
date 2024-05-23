let array=[7,9,0,-2];
//i just need to print the positive numbers
let newArr=[]
for (const value of array) {
    if(value>=0){
        newArr.push(value);
        
    }
}
console.log(newArr);