const {BrowserWindow} = require('electron');
const nativeImage = require('electron').nativeImage;
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
    let icon = nativeImage.createFromPath(`${__dirname}/../../img/icon.png`);
    var window = new BrowserWindow(this.config.browserWindow);

    window.loadURL(`file://${__dirname}/../../index.html`);
    window.setTitle(this.filename.split('.')[0]);
    window.setIcon(icon);
    window.setMenuBarVisibility(false);
    window.notesConfig = this.config.notes;

    if(this.filename !== undefined) {
        window.filename = this.filename;
    }

};

module.exports = Notes;
