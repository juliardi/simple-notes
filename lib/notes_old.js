
const {BrowserWindow} = require('electron');

const {Menu, MenuItem} = require('electron');

let notesInstance;

function Notes() {
    this.notesWindow = this.newNotes();
    this.menu = this.initMenu();
    notesInstance = this;
    console.log(notesInstance);
}

Notes.getInstance = function() {
    // if(notesInstance == null || notesInstance == undefined) {
    //     return new Notes();
    // }
    return notesInstance;
};

Notes.prototype.changeFont = function(element_id, font_name) {
        var el = document.getElementById(element_id);
        el.style = "font-family: "+font_name+";";
    };
    
Notes.prototype.changeFontSize = function(element_id, change_value) {
        var el = document.getElementById(element_id);
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        text.style.fontSize = (parseFloat(style)+change_value) + "px";
    };

Notes.prototype.newNotes = function() {
  var notesWindow = new BrowserWindow({
        width: 300,
        height: 300,
        minHeight: 300,
        minWidth: 300,
        icon: 'img/icon.png',
        skipTaskbar: true,
        alwaysOnTop: true
  });

  notesWindow.loadURL(`file://${__dirname}/../index.html`);

  notesWindow.setMenuBarVisibility(false);

  notesWindow.webContents.openDevTools();

  notesWindow.on('closed', function () {
    notesWindow = null;
  });
  
  return notesWindow;
};

Notes.prototype.initMenu = function(notesWindow) {
    const template = require('./menu-template.js').getTemplates(this);
    
    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
    
    return menu;
};

module.exports = Notes;