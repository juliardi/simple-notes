const remote = require('electron').remote;

const fs = require('fs');

const jsonfile = require('jsonfile');

const IsThere = require("is-there");

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

NotesRenderer.prototype.changeFont = function(element_id, font_name) {
    var el = document.getElementById(element_id);
    el.style = "font-family: " + font_name + ";";
    localStorage.setItem('fontFamily', font_name);
}

NotesRenderer.prototype.getCurrentFont = function() {
    return localStorage.getItem('fontFamily');
}

NotesRenderer.prototype.changeFontSize = function(element_id, change_value) {
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

NotesRenderer.prototype.getCurrentTemplate = function() {
    return localStorage.getItem('template');
};

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

    localStorage.setItem('template', template);
}

NotesRenderer.prototype.getContent = function() {
    var content = document.getElementById('text');

    return content.innerHTML;
}

NotesRenderer.prototype.generateConfigContent = function() {
    var size = remote.getCurrentWindow().getSize();
    var config = {
        "browserWindow": {
            "width": size[0],
            "height": size[1],
            "minHeight": 300,
            "minWidth": 300,
            "icon": "img/icon.png",
            "skipTaskbar": true,
            "alwaysOnTop": true,
            "maximizable": false,
            "title": "Simple Notes"
        },
        "notes": {
            "content": this.getContent(),
            "template": this.getCurrentTemplate(),
            "fontFamily": this.getCurrentFont(),
            "fontSize": this.getFontSize('text')
        }
    }

    return config;
}

NotesRenderer.prototype.save = function() {
    var config = this.generateConfigContent();
    var saveDir = remote.getCurrentWindow().configDir + 'notes/';

    fs.access(saveDir, fs.F_OK | fs.W_OK, function(err) {
        if (err) {
            alert(fs.mkdirSync(saveDir));
        }

        if(remote.getCurrentWindow().filename !== undefined) {
            var filename = remote.getCurrentWindow().filename;
        } else {
            var filename = NotesRenderer.getAvailableName(saveDir);
        }

        jsonfile.writeFile(saveDir + filename, config, function(err) {
            if(err) {
                console.error(err);
            }
        })

    });
}

NotesRenderer.getAvailableName = function(saveDir) {
    var index = 1;

    while(IsThere(saveDir + 'notes-' + index + '.json')) {
        index++;
    }

    return 'notes-' + index + '.json';
}

NotesRenderer.getInstance = function() {
    if (instance == null || instance === undefined) {
        instance = new NotesRenderer(remote.getCurrentWindow().notesConfig);
    }

    return instance;
}

module.exports = NotesRenderer;
