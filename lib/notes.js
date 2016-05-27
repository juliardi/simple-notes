
const fs = require('fs');
const homedir = require('homedir');
const configDir = homedir() + '/.simplenotes/'; 

function Notes(configFile) {
    if(configFile == undefined) {
        this.config = this.loadConfig('default.json'); 
    } else {
        this.config = this.loadConfig(configFile);
    }
}

Notes.prototype.loadConfig = function(configFile) {
    var file_content = fs.readFileSync(configDir + configFile, {encoding: "utf8"});
    
    return JSON.parse(file_content);
};

module.exports = Notes;