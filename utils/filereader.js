#!/usr/bin/env node

/**
 * SSTI
 * SSTI Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 
const lineReader = require('line-reader');
const scan = require('../includes/sst-i');

class reader {
    constructor(listfile,savepath) {
         lineReader.eachLine(listfile, (line, last) => {
            new scan.engineu(line,savepath);
        });
    }
}
module.exports = {
    fileread: reader
}