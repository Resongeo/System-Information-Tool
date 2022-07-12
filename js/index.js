const electron = require("electron")
const { ipcRenderer } = electron

const system = document.getElementById("system")
const cpu = document.getElementById("cpu")
const memory = document.getElementById("memory")
const gpu = document.getElementById("gpu")
const motherboard = document.getElementById("motherboard")
const display = document.getElementById("display")

addEventListener("load", () => {
    localStorage.setItem("theme", "theme-light")
    document.documentElement.className = "theme-light"
    
    changeCategory("system")
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

function changeCategory(category){
    hideAllCategory()

    switch(category){
        case "system":
            system.style.display = "flex"
            break
        case "cpu":
            cpu.style.display = "flex"
            break
        case "memory":
            memory.style.display = "flex"
            break
        case "gpu":
            gpu.style.display = "flex"
            break
        case "motherboard":
            motherboard.style.display = "flex"
            break
        case "display":
            display.style.display = "flex"
            break
    }
}

function hideAllCategory(){
    system.style.display = "none"
    cpu.style.display = "none"
    memory.style.display = "none"
    gpu.style.display = "none"
    motherboard.style.display = "none"
    display.style.display = "none"
}