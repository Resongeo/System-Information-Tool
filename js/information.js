const si = require("systeminformation")

addEventListener("load", load)

async function load(){
    let system_div = document.getElementById("system")
    let system_lis = system_div.querySelectorAll("li")

    si.system()
    .then((data) => {
        system_lis[0].querySelector("span").innerHTML = data.manufacturer.toString()
        system_lis[1].querySelector("span").innerHTML = data.model.toString()
        system_lis[2].querySelector("span").innerHTML = data.version.toString()
        system_lis[3].querySelector("span").innerHTML = data.serial.toString()
        system_lis[4].querySelector("span").innerHTML = data.uuid.toString()
        system_lis[5].querySelector("span").innerHTML = data.virtual.toString()
        system_lis[6].querySelector("span").innerHTML = data.sku.toString()
    })


    let cpu_div = document.getElementById("cpu")
    let cpu_lis = cpu_div.querySelectorAll("li")

    si.cpu()
    .then((data) => {
        cpu_lis[0].querySelector("span").innerHTML = data.manufacturer.toString()
        cpu_lis[1].querySelector("span").innerHTML = data.brand.toString()
        cpu_lis[2].querySelector("span").innerHTML = data.speed + "GHz"
        cpu_lis[3].querySelector("span").innerHTML = data.cores.toString()
        cpu_lis[4].querySelector("span").innerHTML = data.socket.toString()
        cpu_lis[5].querySelector("span").innerHTML = data.vendor.toString()
        cpu_lis[6].querySelector("span").innerHTML = data.virtualization.toString()
    })

    let memory_div = document.getElementById("memory")
    let memory_lis = memory_div.querySelectorAll("li")

    si.mem()
    .then((data) => {
        memory_lis[1].querySelector("span").innerHTML = Math.round((data.total / 1024 / 1024 / 1024) * 100) / 100 + "GB"
        memory_lis[2].querySelector("span").innerHTML = Math.round((data.free / 1024 / 1024 / 1024) * 100) / 100 + "GB"
        memory_lis[3].querySelector("span").innerHTML = Math.round((data.used / 1024 / 1024 / 1024) * 100) / 100 + "GB"
    })

    si.memLayout()
    .then((data) => {
        let sizes_str = ""
        let sizes = []
        for(let i = 0; i < data.length; i++){
            sizes_str += Math.round(data[i].size / 1024 / 1024 / 1024) + "GB "
            sizes.push(data[i].size)
        }
        memory_lis[0].querySelector("span").innerHTML = sizes.every((val, i, arr) => val === arr[0]) ? data.length + "x" + Math.round(data[0].size / 1024 / 1024 / 1024) + "GB" : sizes_str.toString()
        memory_lis[4].querySelector("span").innerHTML = data[0].type.toString()
        memory_lis[5].querySelector("span").innerHTML = data[0].speed + "MHz"
    })

    let gpu_div = document.getElementById("gpu")
    let gpu_lis = gpu_div.querySelectorAll("li")

    si.graphics()
    .then((data) => {
        gpu_lis[0].querySelector("span").innerHTML = data.controllers[0].model 
        gpu_lis[1].querySelector("span").innerHTML = data.controllers[0].bus
        gpu_lis[2].querySelector("span").innerHTML = data.controllers[0].driverVersion
        gpu_lis[3].querySelector("span").innerHTML = data.controllers[0].clockCore
        gpu_lis[4].querySelector("span").innerHTML = data.controllers[0].clockMemory
        gpu_lis[5].querySelector("span").innerHTML = data.controllers[0].vram + "Mb"
        gpu_lis[6].querySelector("span").innerHTML = data.controllers[0].powerLimit + "W"
        gpu_lis[7].querySelector("span").innerHTML = data.controllers[0].temperatureGpu + "°"
    })

    let mbo_div = document.getElementById("motherboard")
    let mbo_lis = mbo_div.querySelectorAll("li")

    si.baseboard()
    .then((data) => {
        mbo_lis[0].querySelector("span").innerHTML = data.manufacturer.toString()
        mbo_lis[1].querySelector("span").innerHTML = data.model.toString()
        mbo_lis[2].querySelector("span").innerHTML = Math.round(data.memMax / 1024 / 1024 / 1024) + "GB"
        mbo_lis[3].querySelector("span").innerHTML = data.memSlots.toString()
    })

    let display_div = document.getElementById("display")
    let display_lis = display_div.querySelectorAll("li")

    si.graphics()
    .then((data) => {
        display_lis[0].querySelector("span").innerHTML = data.displays[0].vendor.toString()
        display_lis[1].querySelector("span").innerHTML = data.displays[0].model.toString()
        display_lis[2].querySelector("span").innerHTML = data.displays[0].resolutionX + "x" + data.displays[0].resolutionY
        display_lis[3].querySelector("span").innerHTML = data.displays[0].main.toString()
        display_lis[4].querySelector("span").innerHTML = data.displays[0].currentRefreshRate + "Hz"
        display_lis[5].querySelector("span").innerHTML = data.displays[0].pixelDepth.toString()
    })
}