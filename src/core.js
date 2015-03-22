/* uQuery v1.0.0 */
var uQuery = (function() {
    var document = window.document;
    var arr = [];
    var nativeEach = arr.forEach;
    var nativeSlice = arr.slice;
    var nativeMap = arr.map;

    function isDocument(obj)   { return obj == document }

    function isObject(obj)     { return typeof obj == "object" }

    var $ = function(selector, context){
        return $.init(selector, context)
    }
    
    $.init = function (selector, scope) {
        scope = scope || document;
        this.scope = scope;
        var context = [selector];
        if(!isDocument(selector))
            context = nativeSlice.call(document.querySelectorAll(selector, scope));
        context.__proto__ = $.fn
        context.selector = selector || ''
        return context;
    }
    
    $.fn = {
        selector: null,
        find: function (element) {
           return $.init(element, this);
        },
        css: function (prop, val) {
            if(arguments.length == 1){ // called with setter obj or getter string
                if(isObject(prop)){ // setter
                    this.each(function (e) {
                        for(var i in prop){
                            e.style[i] = prop[i];
                        }
                    });
                }else{
                    return this[0].style[prop] || getComputedStyle(this[0])[prop];
                }
            }else{
                this.each(function (e) {
                    e.style[prop] = val;
                });
            }
            return this;
        },
        each: function (cb) {
            nativeEach.call(this, cb)
            return this;
        },
        map: function (cb) {
            return nativeMap.call(this, cb);
        },
        on: function (evt, callback) {
            this.each(function (e) {
                e.addEventListener(evt, callback, true);
            });
            return this;
        },
        ready: function (callback) {
            this.on('DOMContentLoaded', function () {
                callback($);
            });
            return this;
        }
    };
    return $;
})();

window.uQuery = uQuery;

window.$ === undefined && (window.$ = uQuery);
