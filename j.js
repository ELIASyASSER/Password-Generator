let input = document.getElementById("input");
let btn = document.getElementById("btn");
let copy = document.querySelector("#copy")
let msg = document.querySelector(".alert")

let chars = 'abcdefghijklmnopqrstuvwxyz1234567890@$^&*()_+=ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function generate() {
    input.value ="";
    let res =""
    let pass = 14
    for (let i = 0; i < pass; i++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        const final = chars.substring(randomNum,randomNum+1)
        // console.log(final);
        res+=final;
        
    }
    
    input.value = res

}

btn.addEventListener("click",()=>{

    generate();

});
copy.onclick = function () {
    if(!input.value){
        alert("please enter a valid value")
    }else{
       copyStr()

    }
}
function copyStr() {


    input.select()
    input.setSelectionRange(0,999)
    navigator.clipboard.writeText(input.value)
    msg.classList.add("s")
    msg.innerHTML = `You Copied ${input.value}`
    setTimeout(() => {
        msg.classList.remove("s")
    }, 2000);
}



