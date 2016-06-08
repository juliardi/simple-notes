
const remote = require('electron').remote;

const {loadCSS} = require('fg-loadcss');

var instance;

function NotesRenderer(config) {
    this.changeFont("text", config.fontFamily);
    this.setFontSize("text", config.fontSize);
    this.setContent("text", config.content);
    this.setTemplate(config.template);
}

NotesRenderer.prototype.setContent = function(element_id, content) {
    var el = document.getElementById(element_id);
    el.innerHTML = content;
}

NotesRenderer.prototype.changeFont = function (element_id, font_name) {
    var el = document.getElementById(element_id);
    el.style = "font-family: " + font_name + ";";
}

NotesRenderer.prototype.changeFontSize = function (element_id, change_value) {
    var el = document.getElementById(element_id);
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    el.style.fontSize = (parseFloat(style) + change_value) + "px";
}

NotesRenderer.prototype.setFontSize = function(element_id, font_size) {
    var el = document.getElementById(element_id);
    el.style.fontSize = font_size + "px";
}

NotesRenderer.prototype.getFontSize = function(element_id) {
    var el = document.getElementById(element_id);
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    return parseFloat(style);
}

NotesRenderer.prototype.setTemplate = function(template) {
    switch (template) {
        case "blue":
            loadCSS('css/blue.css');
            break;
        case "violet":
            loadCSS('css/violet.css');
            break;
        case "green":
            loadCSS('css/green.css');
            break;
        default:
            loadCSS('css/yellow.css');
    }
}

NotesRenderer.getInstance = function() {
    if(instance == null || instance === undefined) {
        instance = new NotesRenderer(remote.getCurrentWindow().notesConfig);
    }

    return instance;
}

module.exports = NotesRenderer;
