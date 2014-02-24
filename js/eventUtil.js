var eventUtil = {
    addEvent: (function() {
        if ( typeof addEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.addEventListener(evt, fn, false);
            }
        } else {
            return function(obj, evt, fn) {
                obj.attachEvent('on' + evt, fn);
            }
        }
    }()),

    removeEvent: (function() {
        if ( typeof removeEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.removeEventListener(evt, fn, false);
            }
        } else {
            return function(obj, evt, fn) {
                obj.detachEvent('on' + evt, fn);
            }
        }
    }()),

    getTarget: (function() {
        if ( typeof addEventListener !== "undefined") {
            return function(evt) {
                return evt.target;
            };
        } else {
            return function(evt) {
                return evt.srcElement;
            };
        }
    }()),

    preventDefault: (function() {
        if ( typeof addEventListener !== "undefined") {
            return function(evt) {
                evt.preventDefault();
            };
        } else {
            return function(evt) {
                evt.returnValie = false;
            }
        }
    }())
};