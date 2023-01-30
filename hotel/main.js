const { app, BrowserWindow } = require('electron');
const { maxHeaderSize } = require('http');
const path = require('path');
const { ipcMain } = require('electron');
const {createDBConnection} = require('./dbConnection.js');
const { createUser } = require('./queries.js');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: maxHeaderSize,
    height: maxHeaderSize,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
      // preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('firstPage.html');
}

// const data = JSON.parse(localStorage.getItem('data'));
// console.log(data.phoneNumber);
// console.log(data.password);


// ipcMain.on('form-submitted', (event, data) => {
//   const phoneNumber = localStorage.getItem("phoneNumber");
//   const password = localStorage.getItem("password");
//   // send data to the backend process
//   // and check the connection to the database
//   console.log(`phoneNumber: ${phoneNumber} password: ${password}`)
// });

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
