
const Notes = require('./notes.js');
const fs = require('fs');
const homedir = require('homedir');
const configDir = homedir() + '/.simplenotes/notes/';


module.exports = traymenu;

function traymenu(app) {
    var menu = [
        {
            label: 'New Notes', click() {
                var notes = new Notes();
                notes.createWindow();
            }
        },
        {
            type: 'separator'
        },
    ];

    if(getFiles()) {

        var obj = {
            label: 'Saved Notes',
            submenu: getFiles()
        };
        menu.push(obj);

        var separator = {
            type: 'separator'
        }
        menu.push(separator);
    }

    menu.push({
        label: 'Exit', click() {
            app.quit();
        }
    });

    return menu;
}

function getFiles() {
    var files = fs.readdirSync(configDir, {
        encoding: "utf8"
    });
    var menu = [];

    for (var idx in files) {
        var filename = files[idx].split(".");
        var arr = {
            label: filename[0],
            click() {
                var notes = new Notes(files[idx]);
                notes.createWindow();
            }
        };

        menu.push(arr);
    }

    if(menu.length == 0) {
        return false;
    } else {
        return menu;
    }
}
