// Topics
// BOM => Browser Object Model
// location (assign - href - origin - reload - replace)
// navigator
// event  ()
// offsetTop;
// scrollY 

// coding
// let isAdmin = false;
// const BASE_URL = location.origin // https://127.0.0.1:5500
const checkConnection = () => {
    const isOnline = navigator.onLine;
    if (isOnline) {
        return;
    } else {
        document.body.textContent ="Is Offline"
    }
};
checkConnection()
// document.addEventListener("click", () => {
//     // location.reload()
//     // console.log(location.href); // getter
//     // location.href = "https://www.google.com" // setter
//     // location.replace("https://www.google.com")
//     // location.assign()
//     // if (isAdmin) {
//     //     location.assign("https://www.google.com")
//     // } else {
//     //     alert("you are not an admin")
//     // }
// });


const cursor = document.querySelector(".circle_cursor");
window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX -20 + "px";
    cursor.style.top = e.clientY -20 + "px";
})
const sections = document.querySelectorAll("section")
const menu = document.querySelectorAll(".menu a")
const toTopBtn = document.querySelector(".toTop");

const dateBanner = document.querySelector(".clock")
const d = new Date
const hour = d.getHours();
const min = d.getMinutes();
const sec = d.getSeconds();
let Am_Pm ;
console.log(d.toString())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())


function Time () {
    if(12 <= d.getHours() <= 23 ){
        return Am_Pm = "PM"
    } else if (0 <= d.getHours() <= 11 ){
       return Am_Pm = "AM"
    }
}
Time()
console.log(Am_Pm);

let newHour;
function ConvertHours (hour){
    if (13 <= hour <= 23 ){
       return newHour = hour - 12
    } else if ( hour = 00){
        return newHour = 12
    }
}
ConvertHours(hour)
console.log(newHour);

function DisplayDate () {
    const d = new Date
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    function Time () {
        if(12 <= d.getHours() <= 23 ){
            return Am_Pm = "PM"
        } else if (0 <= d.getHours() <= 11 ){
           return Am_Pm = "AM"
        }
    }
    Time()
    let newHour;
function ConvertHours (hour){
    if (13 <= hour <= 23 ){
       return newHour = hour - 12
    } else if ( hour = 00){
        return newHour = 12
    }
}
ConvertHours(hour)

    let date = `${newHour} : ${min} : ${sec} ${Am_Pm}`
    dateBanner.innerHTML = `${date}`
    
}

DisplayDate()
setInterval(DisplayDate, 1000)

window.addEventListener("scroll", () => {
    const windowScrollY = window.scrollY;
    sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionOffsetTop = section.offsetTop;
        menu.forEach((link) => {
            const linkRef = link.getAttribute("href").slice(1);
            /// check offset
            if(windowScrollY>=sectionOffsetTop ) {
                if (sectionId === linkRef) {
                    link.classList.add(`active`)
                    document.title = `BOM | ${sectionId.toUpperCase()}`;
                } else {
                    link.classList.remove(`active`)
                }
            }
            
        })
        
    })
    if (windowScrollY >= 100) {
        toTopBtn.classList.add("active")
    }
    else {
        toTopBtn.classList.remove("active");
    }
})

toTopBtn.addEventListener("click", () => { 
    scrollTo({
        top: 0,
    });
})

window.addEventListener("blur", () => {
    document.title = `BOM | BROWSER 😒`
    // close()
})
const initailaTitle = document.title
window.addEventListener("focus", () => {
    document.title = `${initailaTitle}`
})

// document.addEventListener("click", () => {
    
// })
const loading_page = document.querySelector(".loading_page")
const loader = document.querySelector(".loading_page img")
const loaderCouter = loading_page.children[1]
let counter =0


function intervelCounter() {
    const interval = setInterval(() => {
        counter++;
        if (counter == 100) {
            clearInterval(interval);
                loading_page.classList.add("hiddenLoader");
                loading_page.children[0].classList.add("hiddenTitle");
                loading_page.children[1].classList.add("hiddenTitle");
                loader.classList.add("hiddenTitle")
                loader.classList.remove("loader")
        }
        loaderCouter.textContent = `${counter}%`;
    },50)
}
intervelCounter();
window.addEventListener("DOMContentLoaded", () => {
    loading_page.classList.add("hiddenLoader");
    loading_page.children[0].classList.add("hiddenTitle");

})


// search
// SetTimeOut
// Locale Storage vs Session Storage
// Cookies

// const date = new Date()
// console.log(date.getSeconds());
