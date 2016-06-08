const {remote} = require('electron');

const {Menu, MenuItem} = remote;

const NotesRenderer = require('./notesrenderer.js');

const template = require('./menu-template.js').getTemplates(NotesRenderer.getInstance());

const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
}, false);
