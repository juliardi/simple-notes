const fs = require('fs');
const {BrowserWindow} = require('electron');
const Config = require('./config.js');

function Notes(configFile) {
    if (configFile == undefined) {
        Config.loadDefault();
    } else {
        Config.load(configFile);
        this.filename = configFile;
    }
    
    this.config = Config.getCurrentConfig();
}

Notes.prototype.createWindow = function() {
    var window = new BrowserWindow(this.config.browserWindow);

    window.loadURL(`file://${__dirname}/../../index.html`);
    
    window.setTitle(this.filename.split('.')[0]);

    window.setMenuBarVisibility(false);
    
    window.notesConfig = this.config.notes;

    if(this.filename !== undefined) {
        window.filename = this.filename;
    }

};

module.exports = Notes;
