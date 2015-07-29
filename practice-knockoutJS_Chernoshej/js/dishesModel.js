var dishesModel = (function () {
	return {
		dishes: [
			{ name: "pizza", price: 180, amount: ko.observable(0), photo: "img/pizza.png" },
			{ name: "soup", price: 50, amount: ko.observable(0), photo: "img/soup.png" },
			{ name: "porridge", price: 20, amount: ko.observable(0), photo: "img/porridge.png" },
			{ name: "lobster", price: 400, amount: ko.observable(0), photo: "img/lobster.png" },
			{ name: "salad", price: 70, amount: ko.observable(0), photo: "img/salad.png" },
			{ name: "bread", price: 10, amount: ko.observable(0), photo: "img/bread.png" },
			{ name: "meat", price: 100, amount: ko.observable(0), photo: "img/meat.png" },
			{ name: "apple", price: 20, amount: ko.observable(0), photo: "img/apple.png" },
			{ name: "cola", price: 12, amount: ko.observable(0), photo: "img/cola.png" }
		]
	}
})();