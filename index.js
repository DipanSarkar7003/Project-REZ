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
const fadeed_elements = document.querySelectorAll(".faded")
const nav2_three_bar = document.querySelector(".nav2_three_bar")
const mobile_menu = document.querySelector(".mobile_menu")
const mobile_menu_cross = document.querySelector(".mobile_menu_cross")
// WO NAV BAR KA TIMING YAHA SE UPDATE HOGA 

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

let date = new Date().getDay();
let day = days[date];


let hours = new Date().getHours()


let minutes = new Date().getMinutes()
let actual_time = `${hours}:${minutes}`;
console.log(actual_time)

time_element.textContent = (`${day} , ${actual_time}`)

if (date == 4 || hours <= 8 || hours >= 21) {
    open_status.textContent = " sorry closed now"
}
else {
    open_status.textContent = " we are open now"
}

console.log(date)





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


    // FADE WALA ANIMATION YAHA BANA RAHA HU 



    window.addEventListener('scroll', () => {
        fadeed_elements.forEach((elem) => {
            let fadeed_element_top = elem.getBoundingClientRect().top.toFixed()
            let target = device_height - fadeed_element_top

            if (target >= 20) {
                elem.classList.remove("faded")
                elem.classList.add(".nonfaded")

            }
            else {
                elem.classList.remove("nonfaded")
                elem.classList.add(".faded")

            }

        })
    })











    let count_part_top = count_part.getBoundingClientRect().top.toFixed()
    let count_target = device_height - count_part_top;

    if (activate && count_target >= 20) {
        console.log("count running")

        // WO NEECHE WALA COUNTER YAHA SE UPDATE HO RAHA HE BHAI 

        nums.forEach((num) => {
            let start_val = 0;
            let end_val = parseInt(num.getAttribute("value_count"))
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


const preloader = document.querySelector(".loader") ;
window.addEventListener("load" , ()=>{
    preloader.style.display="none"
})




// GSAP KA FANDA YAHA SE SHURU KAR RAHA HU 


// SECTION 1 ANIMATION 

gsap.from ("#section1_text h1 , #section1_text button ,#section1_text  p" , {
    delay:.5,
    opacity : 0,
    scale:0.9,
    transform:"translatey(50%)",   
     duration:.5,
     stagger : .2 
})


// SECTION 2 ANUIMATION 

gsap.from(".section2_box" , {
    transform:"translatex(50%)",  
    opacity:0 ,
    scale:0.9,
    duration:1.4,
    stagger:.5,
    scrollTrigger:{
        trigger:"#section2",
        scroller:"body",
        // markers:true,
        start:("top 70%"),
        end : ("top 40%"),
        scrub:2


    }

    // scrollTrigger:true
})


// SECTION 5 ANIMATION 

gsap.from (" .section5_box img ,.section5_box h1 ,.section5_box p,.section5_box a " , {
    opacity:0,
    duration:.3,
    stagger:.1,
    x:10,
    scrollTrigger:{
        trigger:".section5",
        scroller:"body",
        // markers: true,
        start:("top 80%"),
        end:("bottom 90%"),
        scrub:2,
       
    }

})

// SECTION 6 ANIMATION 

gsap.from (" .section6_box img ,.section6_box h1 ,.section6_box p,.section6_box a " , {
    opacity:0,
    duration:.3,
    stagger:.1,
    x:10,
    scrollTrigger:{
        trigger:".section6",
        scroller:"body",
        // markers: true,
        start:("top 60%"),
        end:("bottom 90%"),
        scrub:2,
       
    }

})


// PHONE MENU BAR LOGIC STARTS HERE 


nav2_three_bar.addEventListener("click" , (e)=>{

    mobile_menu.style.display="block"
    nav2_three_bar.style.display="none"
    mobile_menu_cross.style.fontSize= "2rem"
    console.log("first")

})


mobile_menu_cross.addEventListener("click" , ()=>{
    mobile_menu.style.display="none"
    nav2_three_bar.style.display="inline-block"
    mobile_menu_cross.style.fontSize= "0"
})


















// const observer = new IntersectionObserver((e)=>{
// e.forEach(()=>{
//     if(e.isEntersecting){
//         console.log(e)
//       }
// })
// })
// const float_box = document.querySelector(".float_box")
// float_box.style.top= 100+"px";


// document.addEventListener("mousemove" ,(e) =>{
//     const float_box = document.querySelector(".float_box")
//     float_box.style.top=e.y+"px"
//     float_box.style.left=e.x +"px"
//     console.log(e.y)
// })
