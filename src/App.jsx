import "./App.css";

function App() {
	let words = "The sun sets, casting golden hues over the tranquil lake. Birds return to their nests, while crickets begin their evening symphony"

	let upperCaseWords = []
	let lowerCaseWords = []

	words.split(" ").map((word) => {
		word = word.replace(/[.,]/g, "");

		if(/[A-Z]/.test(word)) {
			upperCaseWords.push(word)
		} else {
			lowerCaseWords.push(word)
		}
	})
	return (
		<>
			<p>Uppercase words: {upperCaseWords.join(", ").toUpperCase()}</p>
			<p>Lowercase words: {lowerCaseWords.join(", ")}</p>
		</>
	);
}

export default App;
