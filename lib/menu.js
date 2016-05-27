// const {remote} = require('electron');

// const {Menu, MenuItem} = remote;

// const template = require('./menu-template.js').getTemplates(remote.getCurrentWindow());

// const menu = Menu.buildFromTemplate(template);

// Menu.setApplicationMenu(menu);

const Notes = require('./notes.js');

var notes = Notes.getInstance();

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    notes.menu.popup(remote.getCurrentWindow());
}, false);
