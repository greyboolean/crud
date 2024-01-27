import Button from "./Button";

function ListItem({ item }) {
  return (
    <li>
      <span>{item.value}</span>
      <Button text="Edit" />
      <Button text="Delete" />
    </li>
  )
}

export default ListItem;
