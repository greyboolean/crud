import { useState } from "react";
import Button from "./Button";
import Form from "./Form";

function ListItem({ item, onDelete, onUpdate }) {
	const [showForm, setShowForm] = useState(false);

	const handleToggleClick = () => {
		setShowForm((showForm) => !showForm);
	};

	return (
		<li>
			<div>
				{showForm ? (
					<Form
						initialValue={item.value}
						id={item._id}
						onClose={handleToggleClick}
						onUpdate={onUpdate}
					/>
				) : (
					<>
						<span>{item.value}</span>
						<Button text="Edit" onClick={handleToggleClick} />
						<Button
							text="Delete"
							onClick={() => onDelete(item._id)}
						/>
					</>
				)}
			</div>
		</li>
	);
}

export default ListItem;
