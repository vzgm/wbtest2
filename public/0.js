webpackJsonp([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__( 15 ); 

module.exports = function() {
	var ttl= document.createElement("div");
	ttl.textContent = 'Button is clicked';
	ttl.className = "adblock";
	document.body.appendChild(ttl);
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".adblock {\n\tborder \t\t: 1px solid blue;\n\tbackground \t: yellow;\n\tpadding \t: 20px;\n}", ""]);

// exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(5)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./bclick.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./bclick.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map