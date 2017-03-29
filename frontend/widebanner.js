"use strict";

module.exports = function() {
	var wideBannerDiv = document.querySelector(".widebanner");
	if(wideBannerDiv){
		var img = document.createElement('img');
		img.src = '/public/img/banner600x120.png';
  		wideBannerDiv.appendChild(img);
	}
}