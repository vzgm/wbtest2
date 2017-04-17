"use strict";

require( './sass/style.scss' );
require( './vendors/jquery-ui-1.12.1.custom/jquery-ui.min.css' );
require( 'expose-loader?$!expose-loader?jQuery!./vendors/jquery-2.2.4.min.js' );
require( 'jquery-ui' );

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

jQuery(function() {
  jQuery('.jtest').html('jQuery test');
  jQuery( "#tabs" ).tabs();
});