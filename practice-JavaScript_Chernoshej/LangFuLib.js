var LangFu = (function () {

    function trueType(entity) {
        var val = toString.call(entity);

        return toString.call(entity).substring(8, val.length - 1);
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
            return source.slice(0, count);
        },

        forEach: function (source, action) {
            for (var i in source)
                source[i] = action(source[i]);
        }
    }
}) ();

LangFu.asChain = function (array) {
    return {
        take: function (count) {
            var current = LangFu.take(array, count);
            return LangFu.asChain(current);
        },

        forEach: function (action) {
            LangFu.forEach(array, action);
            return LangFu.asChain(array);
        },

        toArray: function () {
            return array;
        }
    }
}