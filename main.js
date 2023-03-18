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
	const contents = mainWindow.webContents;

	/*
	if(isDev){
		mainWindow.webContents.openDevTools();
	}
	*/

	mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
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
	const mainMenu = Menu.buildFromTemplate(menu);
	Menu.setApplicationMenu(mainMenu);
});

app.on("window-all-closed", () => {
	if(!isMac){
		app.quit()
	}
})

const menu = [
	...(isMac ? [{
		label: app.name,
		submenu: [
			{
				label: "About",
				click: createAboutWindow
			}
		]
	}] : []),

	{
		role: "fileMenu",
	},
/*
	...(!isMac ? [{
		label: "Page",
		submenu: [{
			label: "Back",
			click: BrowserWindow.webContents.goBack
		}]
	}] : []),
	*/

];
