// let container=document.querySelector(".container")
// let boxContainer=document.querySelector("")
// let box=document.querySelector(".box")

// con

// let username=document.querySelector("input")
// let form=document.querySelector("form")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.dir(username.value)
     
//     if(username.value==""){

//         alert("you cannot apply empty input")
//     }elseif
//     {
    
//     }
// }


let progress = document.querySelector("#progress-bar")
let count = 0
let btn = document.querySelector("#download-btn")

let interval = setInterval(() => {
    if(count<100){
        count++
        progress.style.width = `${count}%`
        progress.innerHTML = `${count}%`

    }else{
        btn.innerHTML = "Download Completed"
        btn.style.backgroundColor = "green"
        clearInterval(interval)
    }
}, 10000/100);
