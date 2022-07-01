const electron = require("electron")
const { ipcRenderer } = electron

addEventListener("load", () => {
    localStorage.setItem("theme", "theme-light")
    document.documentElement.className = "theme-light"
})

function toggleTheme(){
    if(localStorage.getItem("theme") === "theme-light"){
        localStorage.setItem("theme", "theme-dark")
        document.documentElement.className = "theme-dark"
    }
    else{
        localStorage.setItem("theme", "theme-light")
        document.documentElement.className = "theme-light"
    }
    console.log(localStorage.getItem("theme"))
}

function AppControl(type){
    ipcRenderer.send("app:controls", type)
}

const system = document.getElementById("system")
const cpu = document.getElementById("cpu")
const memory = document.getElementById("memory")
const gpu = document.getElementById("gpu")
const motherboard = document.getElementById("motherboard")
const display = document.getElementById("display")

console.log(system)
console.log(cpu)
console.log(memory)
console.log(gpu)
console.log(motherboard)
console.log(display)

function changeCategory(category){

}