console.log("hello world")

// BHAI WO GLOBAL VARIABLES YAHA PE DECLARE KAR DIA 

let nums = document.querySelectorAll(".num");
let duration = 3000;
const hidden_element = document.querySelectorAll(".hidden");
let device_height = window.innerHeight
const section7 = document.querySelector(".section7");
const count_part = document.querySelector(".number_countPart");
let activate = true;
const time_element = document.querySelector("#time");
const open_status = document.querySelector("#open_status")

// WO NAV BAR KA TIMING YAHA SE UPDATE HOGA 

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

let date = new Date().getDay();
let day = days[date];


let hours = new Date().getHours()


let minutes = new Date().getMinutes()
let actual_time = `${hours}:${minutes}`;

time_element.textContent = (`${day} , ${actual_time}`)

if(!date==4 && hours>=8 && hours<=21){
    open_status.textContent = "we are open now"
}
else{
    open_status.textContent = "sorry closed now"
}





// WO SCROLL WALA ANIMATION JO DEKHKE TU KHUSH HO RAHA HE WO YAHA SE HO RAHA HE !

window.addEventListener("scroll", () => {

    hidden_element.forEach((elem) => {
        let hidden_top = elem.getBoundingClientRect().top.toFixed()
        let target = device_height - hidden_top

        if (target >= 20) {
            elem.classList.remove("hidden")
            elem.classList.add("shown")
        }
        else {
            elem.classList.remove("shown")
            elem.classList.add("hidden")
        }
    })

    let count_part_top = count_part.getBoundingClientRect().top.toFixed()
    let count_target = device_height - count_part_top;

    if (activate && count_target >= 20) {
        console.log("count running")

        // WO NEECHE WALA COUNTER YAHA SE UPDATE HO RAHA HE BHAI 

        nums.forEach((num) => {
            let start_val = 0;
            let end_val = parseInt(num.getAttribute("value_count"))
            let id = num.getAttribute("id")
            let interval = Math.floor(5000 / end_val)
            let counter = setInterval(
                () => {

                    start_val += 1;
                    if (num.id == 1) {
                        num.innerHTML = start_val

                    }
                    else {
                        num.innerHTML = start_val + "<span> K </span>"
                        // console.log(num.id)
                    }


                    if (start_val === end_val) {
                        clearInterval(counter)
                    }
                }
                , interval
            )


        })
        activate = false;
        console.log(activate)
    }

})

// const observer = new IntersectionObserver((e)=>{
// e.forEach(()=>{
//     if(e.isEntersecting){
//         console.log(e)
//       }
// })
// })



