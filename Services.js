console.log("Starting")



const accordian = document.getElementsByClassName("accordian_item");
console.log(accordian);

for (let i=0 ; i<accordian.length; i++){
    accordian[i].addEventListener("click" , ()=>{
       accordian[i].classList.toggle("active")
    })
}