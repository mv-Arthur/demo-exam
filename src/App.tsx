import React from "react";
import { Drawner } from "./components/Drawner";
import { Route, Routes } from "react-router-dom";
import { Markup } from "./components/markup/Markup";
import { ToDo } from "./components/todo/ToDo";
import { store } from "./store/store";

function App() {
	React.useEffect(() => {
		const usersFromDB = localStorage.getItem("users");
		if (usersFromDB) {
			const parsed = JSON.parse(usersFromDB);
			store.setUsers(parsed);
		}
		// store.setUsers(JSON.parse(localStorage.getItem("users")))
	}, []);

	return (
		<div>
			<Drawner />
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<ToDo />
						</div>
					}
				/>
				<Route path="/2" element={<div>2</div>} />
				<Route path="/3" element={<div>3</div>} />
				<Route path="/4" element={<div>4</div>} />
				<Route path="/5" element={<div>5</div>} />
				<Route path="/6" element={<div>6</div>} />
			</Routes>
		</div>
	);
}

export default App;
