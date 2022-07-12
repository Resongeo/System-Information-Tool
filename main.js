const electron = require("electron")
const { app, BrowserWindow, Menu, ipcMain } = electron

let mainWindow

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1600,
        minWidth: 1000,
        height: 900,
        minHeight: 600,
        center: true,
        darkTheme: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: "./icons/favicon.ico"
    })

    mainWindow.loadFile("index.html")

    Menu.setApplicationMenu(Menu.buildFromTemplate(MenuBarTemplate))
})

const MenuBarTemplate = [
    {
        label: "Utils",
        submenu: [
            {
                label: "Quit",
                accelerator: "Ctrl+Q",
                click(){
                    app.quit()
                }
            },
            {
                label: "DevTools",
                accelerator: "Ctrl+D",
                click(){
                    mainWindow.toggleDevTools()
                }
            }
        ]
    }
]

ipcMain.on("app:controls", (event, arg) => {
    if(arg == "close"){
        app.quit()
    }
    else if(arg == "maximize"){
        mainWindow.maximize()
    }
    else if(arg == "minimize"){
        mainWindow.minimize()
    }
})