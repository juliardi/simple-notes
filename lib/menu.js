const {remote} = require('electron');

const {Menu, MenuItem} = remote;

const template = require('./menu-template.js').getTemplates();

const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
}, false);
