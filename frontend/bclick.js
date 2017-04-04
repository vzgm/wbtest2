"use strict";

require( './css/bclick.css' ); 

module.exports = function() {
	var ttl= document.createElement("div");
	ttl.textContent = 'Button is clicked';
	ttl.className = "adblock";
	document.body.appendChild(ttl);
}