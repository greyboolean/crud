import { useState } from "react";
import Button from "./Button";

const Form = ({ initialValue, onSubmit }) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleReset = () => {
		setValue("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={value} onChange={handleChange} />
			<Button text="Update" type="submit" />
			<Button text="Reset" onClick={handleReset} />
		</form>
	);
};

export default Form;
