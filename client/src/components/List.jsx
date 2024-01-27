import { useState, useEffect } from "react";
import { getItems } from "../api/items";
import ListItem from "./ListItem";

function List() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const itemsData = await getItems();
			if (itemsData) setItems(itemsData);
		};

		fetchItems();
	}, []);

	return (
		<ul>
			{items.map((item) => (
				<ListItem item={item} key={item._id} />
			))}
		</ul>
	);
}

export default List;
