const checkbox = document.querySelectorAll(".custom-checkbox");
const radiobox = document.querySelectorAll(".radio-box")
const input = document.querySelectorAll(".label")
const error = document.querySelector(".error");
const lowersider = document.querySelector(".lowersider")

let arr = [...input]
checkbox.forEach((checkboxlist) => {
    checkboxlist.addEventListener("click", (e) => {
        let output = true
        output = arr.every((elem) => {
            return elem.value.length != 0
        })
        if (output) {
            let w = 0   
            error.style.display = "none"
            w +=33
            lowersider.style.width = `${w}%`
            checkboxlist.parentElement.classList.toggle("complete");
        }
        else {
            error.style.display = "block"

        }

    })
})
input.forEach((inp)=>{
    inp.addEventListener("focus" ,()=>{
           error.style.display = "none"
    })
})





// checkbox.addEventListener("click" , ()=>{
//     radiobox.classList.add("complete");
// })