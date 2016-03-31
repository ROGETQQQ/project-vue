/*!
 * way.js v1.0.1
 */
(function(global, factory){
	
	 typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	 typeof define === 'function' && define.amd ? define(factory) :
	 (global.Way = factory());
	 
})(this,function(){
	"use strict";
	/*
	 * 创建数据监听器
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	function defineReactive(obj, key, val){
		var property = Object.getOwnPropertyDescriptor(obj, key);
		if (property && property.configurable === false) {
			return;
		}
		var getter = property && property.get;
		var setter = property && property.set;
		
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: function reactiveGetter() {
				var value = getter ? getter.call(obj) : val;
				return value;
			},
			set: function reactiveSetter(newVal) {
				var value = getter ? getter.call(obj) : val;
				if (newVal === value) {
					return;
				}
				if (setter) {
					setter.call(obj, newVal);
				} else {
					val = newVal;
				}
			}
		});
	}
	
	//冻结对象
	var util = Object.freeze({
		defineReactive : defineReactive
	})
	
	/*
	 * 加载全局API
	 */
	function installGlobalApi(Way){
		Way.util = util;
	}
	
	installGlobalApi(Way);
	
	
	function Way(options){
		this._init(options);
		this.addElement();
	};
	
	Way.prototype = {
		
		_init : function(options){
			
			this.el = options.el;
			this.data = options.data;
			this.template = options.template.call(this);
			
		},
		addElement : function(){
			document.querySelector(this.el).innerHTML = this.template;
		}
	}

	
	
	
	return Way;
	
});
