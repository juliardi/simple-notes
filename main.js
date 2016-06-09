const electron = require('electron');
const app = electron.app;

const {Menu, Tray} = require('electron');
const traymenu = require('./lib/core/traymenu.js');

let appIcon = null;

function createTray() {
    appIcon = new Tray("img/icon.png");
    appIcon.setToolTip("Simple Notes Application");
    const contextMenu = Menu.buildFromTemplate(traymenu(app));
    appIcon.setContextMenu(contextMenu);
}

app.on('ready', createTray);

app.on('window-all-closed', function () {
  return false;
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});