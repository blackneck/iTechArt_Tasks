var LangFu = (function(){
    var LangFu = {};
    
    function trueType(entity) {
	   var toString = Object.prototype.toString;
	   var val = toString.call(entity);
	   return val.substring(8, val.length - 1); 				
    }
        
    LangFu.isArray = function (entity) {	
	   return trueType(entity) === "Array";	
    }   

    LangFu.isBoolean = function (entity) {	
	   return trueType(entity) === "Boolean";
    }

    LangFu.isDate = function (entity) {
	   return trueType(entity) === "Date";
    }

    return LangFu;

})();