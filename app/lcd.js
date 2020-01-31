const Lcd = require('lcd');
const { exec, execSync } = require('child_process');

const SharedManager = require('./shared_manager.js');
 
/*
 * Methods
 */

module.exports.initLcd = function(readyCallback) {
	if (SharedManager.deviceSettings.lcd != null) {
		var lcd = new Lcd(SharedManager.deviceSettings.lcd);
		
		lcd.on('ready', function() {
			module.exports.lcd = lcd;
			
			readyCallback();
		});
		
		return true;
	} else {
		return false;
	}
};

module.exports.stringWithSpaces = function(string) {
	var stringLength = string.length;

	var stringWithSpaces = string + " ".repeat(SharedManager.deviceSettings.lcd.cols);
	
	return stringWithSpaces;
};