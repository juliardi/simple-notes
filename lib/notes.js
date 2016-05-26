
var Notes = function() {
    //nothing to do here
}

Notes.prototype.changeFont = function(element_id, font_name) {
        var el = document.getElementById(element_id);
        el.style = "font-family: "+font_name+";";
    };
    
Notes.prototype.changeFontSize = function(element_id, change_value) {
        var el = document.getElementById(element_id);
        var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
        text.style.fontSize = (parseFloat(style)+change_value) + "px";
    };

module.exports = Notes;