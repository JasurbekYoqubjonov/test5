const categoryBtn=document.querySelector(".category_btn")
const modal1=document.querySelector(".modals1")
const modal2=document.querySelector(".modals2")
const modal3=document.querySelector(".modals3")
const modal4=document.querySelector(".modals4")
const modalBtn1=document.querySelector(".modal_btn1")
const modalBtn2=document.querySelector(".modal_btn2")
const modalBtn3=document.querySelector(".modal_btn3")
const modalBtn4=document.querySelector(".modal_btn4")
const overlay=document.querySelector(".overlay")
const style=document.querySelectorAll(".style")
const closes=document.querySelectorAll(".modal_iks1")

document.addEventListener("DOMContentLoaded",()=>{
    style.forEach(item=>{
        item.style.top="-180%"
    })
})
const closeFunc=()=>{
    style.forEach(item=>{
        setTimeout(() => {
            item.style.top="-100%"
        }, 500);
    })
    overlay.classList.add("hidden")
}
closes.forEach(item=>{
    item.addEventListener("click",()=>{
        closeFunc()
    })
})
overlay.addEventListener("click",()=>{
    closeFunc()
})
categoryBtn.addEventListener("click",()=>{
    modal1.classList.remove("hidden")
    setTimeout(() => {
        modal1.style.top="0%"
    }, 500);
    overlay.classList.remove("hidden")
})
modalBtn1.addEventListener("click",()=>{
    modal1.classList.add("hidden")
    modal2.classList.remove("hidden")
    setTimeout(() => {
        modal2.style.top="0%"
    }, 500);
})
modalBtn2.addEventListener("click",()=>{
    modal2.classList.add("hidden")
    modal3.classList.remove("hidden")
    setTimeout(() => {
        modal3.style.top="0%"
    }, 500);
})
modalBtn3.addEventListener("click",()=>{
    modal3.classList.add("hidden")
    modal4.classList.remove("hidden")
    setTimeout(() => {
        modal4.style.top="0%"
    }, 500);
})
modalBtn4.addEventListener("click",()=>{
    modal4.classList.add("hidden")
    overlay.classList.add("hidden")
    style.forEach(item=>{
        item.style.top="-100%"
    })
})