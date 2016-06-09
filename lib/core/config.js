const fs = require('fs');
const IsThere = require("is-there");
const homedir = require('homedir');
const configDir = homedir() + '/.simplenotes/';

var currentConfig = {};

function Config() {
}

Config.load = function(filename) {
    var configPath = configDir + filename;
    
    if(IsThere(configPath)) {
        currentConfig = Config.loadFile(configPath);
    }
}

Config.loadDefault = function() {
    var filepath = `${__dirname}/../../defaultconf.json`;
    
    currentConfig = Config.loadFile(filepath);
}

Config.loadFile = function(filepath) {
    var file_content = fs.readFileSync(filepath, {
        encoding: "utf8"
    });

    return JSON.parse(file_content);
}

Config.getCurrentConfig = function() {
    return currentConfig;
}

Config.getConfigDir = function() {
    return configDir;
}

module.exports = Config;