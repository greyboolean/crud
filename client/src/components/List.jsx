import { useState, useEffect } from "react";
import { getItems, deleteItem, updateItem } from "../api/items";
import ListItem from "./ListItem";

function List() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const itemsData = await getItems();
			if (itemsData) {
				setItems(itemsData);
			}
		};

		fetchItems();
	}, []);

	const handleDelete = async (id) => {
		const itemData = await deleteItem(id);
		if (itemData) {
			setItems((items) => {
				return items.filter((item) => item._id !== id);
			});
		}
	};

	const handleUpdate = async (id, item) => {
		const itemData = await updateItem(id, item);
		if (itemData) {
			setItems((items) => {
				return items.map((item) => {
					if (item._id === id) {
						return { ...item, value: itemData.value };
					}
					return item;
				});
			});
		}
	};

	return (
		<ul>
			{items.map((item) => (
				<ListItem
					item={item}
					key={item._id}
					onDelete={handleDelete}
					onUpdate={handleUpdate}
				/>
			))}
		</ul>
	);
}

export default List;
