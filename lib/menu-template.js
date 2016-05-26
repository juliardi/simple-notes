
const {dialog} = require('electron').remote;

const Notes = require('./notes.js');

var notes = new Notes();

module.exports = {
    getTemplates: function () {
        return [
            {
                label: 'Font Family',
                submenu: [
                    {
                        label: 'Fantasy',
                        click() {
                            notes.changeFont('text', 'fantasy');
                        }
                    },
                    {
                        label: 'Monospace',
                        click() {
                            notes.changeFont('text', 'Monospace');
                        }
                    },
                    {
                        label: 'sans-serif',
                        click() {
                            notes.changeFont('text', 'sans-serif');
                        }
                    },
                    {
                        label: 'serif',
                        click() {
                            notes.changeFont('text', 'serif');
                        }
                    }
                ]
            },
            {
                label: 'Font Size',
                submenu: [
                    {
                        label: 'Increase Font Size',
                        accelerator: 'CmdOrCtrl+]',
                        click() {
                            notes.changeFontSize('text', 1);
                        }
                    },
                    {
                        label: 'Decrease Font Size',
                        accelerator: 'CmdOrCtrl+[',
                        click() {
                            notes.changeFontSize('text', -1);
                        }
                    }
                ]
            },
            {
                type: 'separator'
            },
            {
                label: 'About',
                click() {
                    dialog.showMessageBox({
                        "type": "info",
                        "title": "About",
                        "message": "Simple Notes version 1.0\n\nSimple Notes is a simple sticky notes application\n\nCreated by Muhammad Safri Juliardi",
                        "buttons": ["OK"],
                        "icon": "img/icon.png"
                    })
                }
            }
        ];
    }
};