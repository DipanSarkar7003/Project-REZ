console.log("hello world")

let nums = document.querySelectorAll(".num")
let duration = 1000;


let device_height = window.innerHeight
const section7 = document.querySelector(".section7")
let section7_top = section7.getBoundingClientRect().top.toFixed()
window.addEventListener("scroll", ()=>{
    console.log(section7_top)
})




const observer = new IntersectionObserver((e)=>{
e.forEach(()=>{
    if(e.isEntersecting){
        console.log(e)
      }
})
})


// WO NEECHE WALA COUNTER YAHA SE UPDATE HO RAHA HE BHAI 

nums.forEach ((num)=>{
let start_val = 0;
let end_val = parseInt(num.getAttribute("value_count"))
let id = num.getAttribute("id")
let interval = Math.floor(5000/end_val) 
let counter = setInterval(
    ()=>{
        
        start_val += 1 ;
        if (num.id==1){
            num.innerHTML = start_val
            
        }
        else{
            num.innerHTML = start_val + "<span> K </span>"
            // console.log(num.id)
        }
        

        if(start_val===end_val){
            clearInterval(counter)
        }
    }
    , interval
) 


})
