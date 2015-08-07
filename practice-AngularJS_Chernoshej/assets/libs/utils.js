var utils = (function () {
	function convertData(rawData, callback) {
		if (typeof callback === "undefined")
			return rawData;
		else
			return callback.call(this, rawData);
	}
	
	return {
		convertData: convertData
	};
	
})()