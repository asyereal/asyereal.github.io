const path = require("path");
const {app, BrowserWindow, Menu} = require("electron");

const isDev = process.env.NODE_ENV !== "production";

const isWin = process.platform === "win32";
const isGNU = process.platform === "linux";
const isMac = process.platform === "darwin";

function createMainWindow(){
	const mainWindow = new BrowserWindow({
		title: "RealEdu",
		width: 800,
		height: 600
	});
/*
	if(isDev){
		mainWindow.webContents.openDevTools();
	}
*/
	mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
	const menu = [
		{
			label: "Quit",
			click: app.quit
		},
		{
			label: "About",
			click: createAboutWindow
		}
	]
	//sets the menu
	const mainMenu = Menu.buildFromTemplate(menu);
	Menu.setApplicationMenu(mainMenu);
}

function createAboutWindow(){
	const aboutWindow = new BrowserWindow({
		title: "About RealEdu",
		width: 300,
		height: 300
	});

	aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

app.whenReady().then(() => {
	createMainWindow();

	app.on("activate", () => {
		if(BrowserWindow.getAllWindows().length === 0) {
			createMainWindow();
		}
	})
});

app.on("window-all-closed", () => {
	if(!isMac){
		app.quit()
	}
})

