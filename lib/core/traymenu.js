
const Notes = require('./notes.js');

module.exports = traymenu;

function traymenu(app) {
    return [
        {
            label: 'New Notes', click() {
                var notes = new Notes();
                notes.createWindow();
            }
        },
        {
            type: 'separator',
        },
        {
            label: 'Exit', click() {
                app.quit();
            }
        }
    ];
}