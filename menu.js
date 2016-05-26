const {remote} = require('electron');

const {Menu, MenuItem} = remote;

const template = [
    {
        label: 'Font Family',
        submenu: [
            {
                label: 'Fantasy',
                click() {
                    changeFont('fantasy');
                }
            },
            {
                label: 'Monospace',
                click() {
                    changeFont('Monospace');
                }
            },
            {
                label: 'sans-serif',
                click() {
                    changeFont('sans-serif');
                }
            },
            {
                label: 'serif',
                click() {
                    changeFont('serif');
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
                    changeFontSize(1);
                }
            },
            {
                label: 'Decrease Font Size',
                accelerator: 'CmdOrCtrl+[',
                click() {
                    changeFontSize(-1);
                }
            }
        ]
    },
    {
        type: 'separator'
    },
    {
        label: 'About'
    }
];

const menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
}, false);

function changeFont(font_name) {
    var text = document.getElementById('text');
    text.style = "font-family: "+font_name+";";
}

function changeFontSize(font_size) {
    var text = document.getElementById('text');
    var style = window.getComputedStyle(text, null).getPropertyValue('font-size');
    text.style.fontSize = (parseFloat(style)+font_size) + "px";
}
