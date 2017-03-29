"use strict";

module.exports = function() {
	var bannerDiv = document.querySelector(".banner");
	if(bannerDiv){
		var img = document.createElement('img');
		img.src = '/public/img/banner300x300.png';
  		bannerDiv.appendChild(img);
	}
}