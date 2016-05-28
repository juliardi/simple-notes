
function NotesRenderer(config) {
    this.changeFont("text", config.fontFamily);
    this.setFontSize("text", config.fontSize);
    this.setContent("text", config.content);
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

module.exports = NotesRenderer;