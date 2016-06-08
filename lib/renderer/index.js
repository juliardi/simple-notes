// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const NotesRenderer = require('./notesrenderer.js');

var notesRenderer = NotesRenderer.getInstance();

window.onresize = function() {
    var text = document.getElementById('text');
    text.style.height = window.innerHeight - 20 + 'px';
}
