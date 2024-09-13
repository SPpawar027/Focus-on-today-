const checkbox = document.querySelectorAll(".custom-checkbox");
const radiobox = document.querySelectorAll(".radio-box")
const input = document.querySelectorAll(".label")
const error = document.querySelector(".error");
const lowersider = document.querySelector(".lowersider")
const bartxt = document.querySelector(".bar-text")
const countcomplete = document.querySelector(".countcomplete")
const baruppr = document.querySelector(".baruppr");
const footer = document.querySelector(".footer");
let allQuotes = [
    " Raise the bar by completing your goals!",
    "Well begun is half done!",
    " Just a step away, keep going!",
    " Just a step away, keep going!",
    "Whao! you just complete all the goals , its time for chill"

]

let bottomQuotes = [ 
    "“Move one step ahead, today!”",
    "“Keep Going, You’re making great progress!”",
    "“Keep Going, You’re making great progress!”",
    "“Keep Going, You’re making great progress!”",
    "Way to go! You've crossed the finish line with flying colors!"
]



let allGoals = JSON.parse(localStorage.getItem("myGoal")) || {
    first: {
        name: "",
        complete: false
    },
    second: {
        name: "",
        complete: false
    },
    third: {
        name: "",
        complete: false
    },
    forth:{
        name:"",
        complete:false
    }
}
let completedcount = Object.values(allGoals).filter((e) => e.complete).length
bartxt.firstElementChild.innerHTML = `${completedcount}/${input.length}% completed `
lowersider.style.width = `${(completedcount /3) * 100}%`
bartxt.style.display ="block"



console.log(input.length);

let arr = [...input]
checkbox.forEach((checkboxlist) => {
    checkboxlist.addEventListener("click", (e) => {
        console.log(arr.length)
        const output = arr.every((elem) => {
            return elem.value
        })
        if (output) {

            error.style.display = "none"

            checkboxlist.parentElement.classList.toggle("complete");
            const inputid = checkboxlist.nextElementSibling.id
            // console.log(inputid);
            // console.log(allGoals[inputid].completed);
            allGoals[inputid].complete = !allGoals[inputid].complete
            completedcount = Object.values(allGoals).filter((e) => e.complete).length
            console.log(completedcount);
            bartxt.style.display ="block"
            baruppr.innerHTML= allQuotes[completedcount]
            footer.innerHTML = bottomQuotes[completedcount]
            lowersider.style.width = `${(completedcount / input.length) * 100}%`
            bartxt.firstElementChild.innerHTML = `${completedcount}/${input.length}% completed `
            localStorage.setItem("myGoal", JSON.stringify(allGoals))

        }
        else {
            error.style.display = "block"
        }
    })
})
input.forEach((inp) => {
    // console.log(inp);
    // console.log(allGoals[inp.id]);
    if (allGoals[inp.id]) {
        inp.value = allGoals[inp.id].name
    }
    if (allGoals[inp.id].complete) {
        inp.parentElement.classList.add("complete")
    }

    inp.addEventListener("focus", () => {
        error.style.display = "none"
    })
    inp.addEventListener("input", (e) => {

        if (allGoals[inp.id].complete) {
            inp.value = allGoals[inp.id].name
            return
        }
        if(allGoals[inp.id]){

            allGoals[e.target.id].name =  e.target.value
        }
        else{
            allGoals[inp.id]={
                name:input.value,
                complete:false
            }
        }
            
           
        
        localStorage.setItem("myGoal", JSON.stringify(allGoals))
        // Only store non-empty values


    })
})





// checkbox.addEventListener("click" , ()=>{
//     radiobox.classList.add("complete");
// })