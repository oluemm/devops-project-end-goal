import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, handleItemDelete, handleCheck, onClearList }) {
  let sortedItems;
  const sorts = [
    { key: "input", value: "Sort by input" },
    { key: "description", value: "Sort by description" },
    { key: "packed", value: "Sort by packed status" },
  ];
  const [sortBy, setSortBy] = useState("input");

  switch (sortBy) {
    case "description":
      sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
      break;

    case "packed":
      sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      sortedItems = [...items];
      break;
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItem={() => handleItemDelete(item.id)}
            onCheck={() => handleCheck(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      {sortedItems.length > 1 ? (
        <div className="actions">
          <select name="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {sorts.map((sort) => (
              <option key={sort.key} value={sort.key}>
                {sort.value}
              </option>
            ))}
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      ) : null}
    </div>
  );
}
