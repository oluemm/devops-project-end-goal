export default function Item({ item, onDeleteItem, onCheck }) {
  return (
    <li>
      <input type="checkbox" name="packed" id={item.id} checked={item.packed} onClick={onCheck} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button type="button" onClick={onDeleteItem}>
        ❌
      </button>
    </li>
  );
}
