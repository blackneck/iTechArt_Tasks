var LangFu = (function () {

    function trueType(entity) {                 
        var toString = Object.prototype.toString,
            val = toString.call(entity);

        return val.substring(8, val.length - 1);
    }

    return {
        isArray: function (entity) {
            return trueType(entity) === "Array";
        },

        isBoolean: function (entity) {
            return trueType(entity) === "Boolean";
        },

        isDate: function (entity) {
            return trueType(entity) === "Date";
        },

        take: function (source, count) {

            if (trueType(source) !== "Array")
                throw new TypeError("Array was excpected");
            else if (count > source.length)
                throw new RangeError("count is greater than array length");
            else
                return source.slice(0, count);
        },
        
        forEach: function (source, action) {
            for(var i in source)
                source[i] = action(source[i]);
        }
    }
} ());
