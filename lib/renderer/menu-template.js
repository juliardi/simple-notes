
const {dialog} = require('electron').remote;

module.exports = {
    getTemplates: function (notesrenderer) {
        return [
            {
                label: 'Font Family',
                submenu: [
                    {
                        label: 'Fantasy',
                        click() {
                            notesrenderer.changeFont('text', 'fantasy');
                        }
                    },
                    {
                        label: 'Monospace',
                        click() {
                            notesrenderer.changeFont('text', 'Monospace');
                        }
                    },
                    {
                        label: 'sans-serif',
                        click() {
                            notesrenderer.changeFont('text', 'sans-serif');
                        }
                    },
                    {
                        label: 'serif',
                        click() {
                            notesrenderer.changeFont('text', 'serif');
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
                            notesrenderer.changeFontSize('text', 1);
                        }
                    },
                    {
                        label: 'Decrease Font Size',
                        accelerator: 'CmdOrCtrl+[',
                        click() {
                            notesrenderer.changeFontSize('text', -1);
                        }
                    }
                ]
            },
            {
                type: 'separator'
            },
            {
                label: 'Template',
                submenu: [
                    {
                        label: 'blue',
                        click() {
                            notesrenderer.setTemplate('blue');
                        }
                    },
                    {
                        label: 'green',
                        click() {
                            notesrenderer.setTemplate('green');
                        }
                    },
                    {
                        label: 'violet',
                        click() {
                            notesrenderer.setTemplate('violet');
                        }
                    },
                    {
                        label: 'yellow',
                        click() {
                            notesrenderer.setTemplate('yellow');
                        }
                    },
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
