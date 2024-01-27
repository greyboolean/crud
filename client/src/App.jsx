import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/items" element={<Items />} />
				<Route path="/items/:id" element={<Item />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
