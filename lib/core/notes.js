
const fs = require('fs');

const {BrowserWindow} = require('electron');

const homedir = require('homedir');
const configDir = homedir() + '/.simplenotes/';

function Notes(configFile) {
    if (configFile == undefined) {
        this.config = this.loadConfig('default.json');
    } else {
        this.config = this.loadConfig(configFile);
    }
}

Notes.prototype.loadConfig = function (configFile) {
    var file_content = fs.readFileSync(configDir + configFile, { encoding: "utf8" });

    return JSON.parse(file_content);
};

Notes.prototype.createWindow = function () {
    var window = new BrowserWindow(this.config.browserWindow);

    window.loadURL(`file://${__dirname}/../../index.html`);

    window.setMenuBarVisibility(false);

    window.notesConfig = this.config.notes;

    window.webContents.openDevTools();

    window.on('closed', function () {
        notesWindow = null;
    });
};

module.exports = Notes;
