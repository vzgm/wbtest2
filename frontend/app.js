"use strict";

require( './sass/style.scss' ); 

document.addEventListener('DOMContentLoaded', function () {

	var bannerDiv = document.querySelector(".banner");
	if(bannerDiv){
	    require.ensure(['./banner'], function(require){
			var banner = require('./banner');
			banner();
		})
	}

	var wideBannerDiv = document.querySelector(".widebanner");
	if(wideBannerDiv){
	    require.ensure(['./widebanner'], function(require){
			var widebanner = require('./widebanner');
			widebanner();
		})
	}	

});

document.getElementById('loginButton').onclick = function() {
	
	require.ensure(['./bclick'], function(require){
		var bclick = require('./bclick');
		bclick();
	})
	
}