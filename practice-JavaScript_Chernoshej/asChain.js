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