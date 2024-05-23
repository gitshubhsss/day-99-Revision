let value=document.getElementById("p");
let decrease=document.getElementById("decrease");
let increase=document.getElementById("increase");
let reset=document.getElementById("reset");

let cnt=0;


increase.addEventListener("click",()=>{
    value.innerText=cnt+1;
    cnt++;
    
})
decrease.addEventListener("click",()=>{
   if(cnt>0){
    cnt--;
    value.innerText=cnt;
   }
})
reset.addEventListener("click",()=>{
    cnt=0;
    value.innerText=cnt;
})
