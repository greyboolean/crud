import { useState } from "react";
import Button from "./Button";

const Form = ({ initialValue, id, onClose, onUpdate }) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onUpdate(id, { value });
		onClose();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={value} onChange={handleChange} />
			<Button text="Update" type="submit" />
			<Button text="Close" type="button" onClick={onClose} />
		</form>
	);
};

export default Form;
