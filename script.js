function app() {
	// -------------create presentation elements-------------
	const root = document.getElementById("root");

	const searchContainer = document.createElement("div");
	searchContainer.className = "search-container";

	const inputBox = document.createElement("input");
	inputBox.type = "text";
	inputBox.name = "fruit";
	inputBox.placeholder = "Search fruit 🍎";

	const suggestions = document.createElement("div");
	suggestions.className = "suggestions";

	const suggestionList = document.createElement("ul");

	suggestions.appendChild(suggestionList);
	searchContainer.appendChild(inputBox);
	searchContainer.appendChild(suggestions);
	root.appendChild(searchContainer);

	// ---------------functionallity-----------------
	let userInput = ''; 
	const fruit = getFruit();

	function searchHandler(ev) { 
		userInput = ev.target.value.toLowerCase();
		suggestionList.innerHTML = '';
		if (userInput === '') {
			return
		};

		const filteredFruit = fruit.filter((fruitName) => {
			return fruitName.toLowerCase().includes(userInput);
		});

		filteredFruit.forEach((fruitName) => {
			const fruitElement = document.createElement('li');
			fruitElement.innerText = fruitName;
			suggestionList.appendChild(fruitElement);
		});
	};

	function useSuggestion(ev) {
		inputBox.value = ev.target.innerText;
		suggestionList.innerHTML = '';
	 };

	// add event handlers
	inputBox.addEventListener("keyup", searchHandler);
	suggestions.addEventListener("click", useSuggestion);
}
app();


function getFruit() {
	const fruit = [
		"Apple",
		"Apricot",
		"Avocado 🥑",
		"Banana",
		"Bilberry",
		"Blackberry",
		"Blackcurrant",
		"Blueberry",
		"Boysenberry",
		"Currant",
		"Cherry",
		"Coconut",
		"Cranberry",
		"Cucumber",
		"Custard apple",
		"Damson",
		"Date",
		"Dragonfruit",
		"Durian",
		"Elderberry",
		"Feijoa",
		"Fig",
		"Gooseberry",
		"Grape",
		"Raisin",
		"Grapefruit",
		"Guava",
		"Honeyberry",
		"Huckleberry",
		"Jabuticaba",
		"Jackfruit",
		"Jambul",
		"Juniper berry",
		"Kiwifruit",
		"Kumquat",
		"Lemon",
		"Lime",
		"Loquat",
		"Longan",
		"Lychee",
		"Mango",
		"Mangosteen",
		"Marionberry",
		"Melon",
		"Cantaloupe",
		"Honeydew",
		"Watermelon",
		"Miracle fruit",
		"Mulberry",
		"Nectarine",
		"Nance",
		"Olive",
		"Orange",
		"Clementine",
		"Mandarine",
		"Tangerine",
		"Papaya",
		"Passionfruit",
		"Peach",
		"Pear",
		"Persimmon",
		"Plantain",
		"Plum",
		"Pineapple",
		"Pomegranate",
		"Pomelo",
		"Quince",
		"Raspberry",
		"Salmonberry",
		"Rambutan",
		"Redcurrant",
		"Salak",
		"Satsuma",
		"Soursop",
		"Star fruit",
		"Strawberry",
		"Tamarillo",
		"Tamarind",
		"Yuzu",
	];
	return fruit;
}




