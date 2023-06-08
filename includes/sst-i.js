#!/usr/bin/env node

/**
 * SSTI
 * SSTI Bug scanner for WebPentesters and Bugbounty Hunters
 *
 * @author karthikeyan V (karthithehacker) <https://karthithehacker.com>
 */
//lib and includes section 
const payloads = require('./payloads').payloads;
const scanner =  require('./scan');
const lineReader = require('line-reader');
//lib and includes section 


//Constractor class 
class redirect {
    constructor(url,save) {
       
       
            for (const payload of payloads) {
                new scanner.scanner(url,payload,save)
                }
      
        
        
 }
}
//Exporting the modules
module.exports = {
    
    engineu:redirect
}