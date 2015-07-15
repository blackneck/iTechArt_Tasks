//define LangFu library
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
            for (var i in source)
                source[i] = action(source[i]);
        }
    }
} ());

//define asChain object
var asChain = function (array) {
    return {
        take: function (count) {
            array = LangFu.take(array, count);
            return this;
        },

        forEach: function (action) {
            LangFu.forEach(array, action);
            return this;
        },

        toArray: function () {
            return array;
        }
    }
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    d = new Date(),
    b = false,
    square = function (i) {
        return i * i;
    }

LangFu.isArray(a); //true
LangFu.isBoolean(b) //true
LangFu.isDate(d); //true

LangFu.take(a, 5) // [ 1, 2, 3, 4, 5 ]

LangFu.forEach(a, square);
console.log(a) // [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

asChain(a).take(5).toArray(); //