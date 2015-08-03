ko.bindingHandlers.mark = {
	update: function (element, valueAccessor, allBindings, bindingContext) {
		var value = ko.unwrap(valueAccessor());		
		for (var i in value) {
			if (value[i].name == bindingContext.name) {
				$(element).addClass("selected");
				return;
			}											
		}
		$(element).removeClass("selected");
	}
};