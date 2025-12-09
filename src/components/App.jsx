import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import AddHogForm from "./AddHogForm";

import hogsData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogsData);
	const [hiddenHogs, setHiddenHogs] = useState([]);
	const [filterGreased, setFilterGreased] = useState(false);
	const [sortBy, setSortBy] = useState("");

	const handleHideHog = (hogName) => {
		setHiddenHogs([...hiddenHogs, hogName]);
	};

	const handleAddHog = (newHog) => {
		setHogs([...hogs, newHog]);
	};

	const getFilteredAndSortedHogs = () => {
		let displayedHogs = hogs.filter((hog) => !hiddenHogs.includes(hog.name));

		if (filterGreased) {
			displayedHogs = displayedHogs.filter((hog) => hog.greased);
		}

		if (sortBy === "name") {
			displayedHogs = [...displayedHogs].sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortBy === "weight") {
			displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
		}

		return displayedHogs;
	};

	return (
		<div className="App">
			<Nav />
			<FilterSort
				filterGreased={filterGreased}
				onFilterChange={setFilterGreased}
				sortBy={sortBy}
				onSortChange={setSortBy}
			/>
			<AddHogForm onAddHog={handleAddHog} />
			<HogList hogs={getFilteredAndSortedHogs()} onHide={handleHideHog} />
		</div>
	);
}

export default App;
