console.log("hello world")

let nums = document.querySelectorAll(".num")
let duration = 1000;


let device_height = window.innerHeight
const section7 = document.querySelector(".section7")
let top = section7.getElementClientRects
console.log(top)

// WO NEECHE WALA COUNTER YAHA SE UPDATE HO RAHA HE BHAI 

nums.forEach ((num)=>{
let start_val = 0;
let end_val = parseInt(num.getAttribute("value_count"))
let id = num.getAttribute("id")
let interval = Math.floor(5000/end_val) 
let counter = setInterval(
    ()=>{
        
        start_val += 1 ;
        if (num.id===1){
            num.innerHTML = start_val
        }
        else{
            num.innerHTML = start_val + "<span> K </span>"
        }
        

        if(start_val===end_val){
            clearInterval(counter)
        }
    }
    , interval
) 


})
