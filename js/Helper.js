// Polyfill
if (typeof Object.create != 'function') {
    (function () {
        var F = function () {};
        Object.create = function (o) {
            if (arguments.length > 1) { throw Error('Second argument not supported');}
            if (o === null) { throw Error('Cannot set a null [[Prototype]]');}
            if (typeof o != 'object') { throw TypeError('Argument must be an object');}
            F.prototype = o;
            return new F;
        };
    })();
}

var Helper = (function() {
    /**
     * @param Object childObject
     * @param Object parentObject
     */
    function inherit(childObject, parentObject) {
        /*
         Method to copy from parentObject onto the childObject.
         The copyOfParent object now has everything the parentObject does.
         */
        var copyOfParent = Object.create(parentObject.prototype);

        /*
         Set the constructor of this new object to point to the childObject.
         This is necessary to assign childObject constructor to it's constructor function,
         which was overwritten during the Object.create() process.
         */
        copyOfParent.constructor = childObject;

        //Set childObject prototype to copyOfParent to inherit everything from copyOfParent (from parentObject).
        childObject.prototype = copyOfParent;
    }

    return {
        inherit: inherit
    };
}());