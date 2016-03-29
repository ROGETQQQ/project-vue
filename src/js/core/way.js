/*!
 * way.js v1.0.1
 */
(function(global, factory){
	 typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	 typeof define === 'function' && define.amd ? define(factory) :
	 (global.way = factory());
	 
})(this,function(){
	"use strict";
	return function(){
		this.a = 1;
	}
});
