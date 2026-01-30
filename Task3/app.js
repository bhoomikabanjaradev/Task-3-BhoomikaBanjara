let change= document.querySelector(".change");
let toggle= document.querySelector(".toggle");
let msg = document.querySelector("#msg")
let box= document.querySelector(".content");
change.addEventListener("click",function(){
    msg.innerText="Text changed using JavaScript";
});
toggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    box.style.backgroundColor ="#1e1e1e";
    
})

