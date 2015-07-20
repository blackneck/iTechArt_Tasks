var a = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    d = new Date(),
    b = false,
    square = function (i) {
        return i * i;
    }
    
    
console.log("a = " + a);
console.log("d = " + d);
console.log("b = " + b);
console.log("square = " + square);    
    
console.log("method:\"isArray(entity)\" argument: a");    
console.log("result : " + LangFu.isArray(a));

console.log("method:\"isArray(entity)\" argument: square");    
console.log("result : " + LangFu.isArray(square));

console.log("method:\"isBool(entity)\" argument: b");
console.log("result : " + LangFu.isBoolean(b));

console.log("method:\"isBool(entity)\" argument: empty string");
console.log("result : " + LangFu.isBoolean(""));

console.log("method:\"isDate(entity)\" argument: d");
console.log("result : " + LangFu.isDate(d));

console.log("method:\"take(source, count)\" arguments: a, 4.9");
console.log("result : " + LangFu.take(a, 4.9));

console.log("method:\"take(source, count)\" arguments: a, -4");
console.log("result : " + LangFu.take(a, -4));

console.log("method:\"forEach(source, action)\" arguments: a, square");
LangFu.forEach(a, square)
console.log("result : a = " + a );

console.log("method:\"asChain(array)\" arguments: a");
console.log("calling : LangFu.asChain(a).take(7).take(4).take(3).forEach(square).toArray()")
console.log("result : " + LangFu.asChain(a).take(7).take(4).take(3).forEach(square).toArray());


console.log("var c = LangFu.asChain(a).take(6);");
console.log("var d = c.take(4);");
var c = LangFu.asChain(a).take(6);
var d = c.take(4);
console.log(c.toArray());
console.log(d.toArray());