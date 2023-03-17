const path = require("path");
const {app, BrowserWindow} = require("electron");

function createMainWindow(){
	const mainWindow = newBrowserWindow({
		title: "RealEdu",
		width: 800,
		height: 600
	});

	mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(() => {
	createMainWindow();
});
