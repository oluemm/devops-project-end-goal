import React, { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // assuming initial items come from external api
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    // check if item already exists, if so, increment its quantity
    const idx = items.findIndex(
      (newItem) => newItem.description.toLowerCase() === item.description.toLowerCase()
    );
    if (idx !== -1) {
      items[idx].quantity += item.quantity;
      setItems((items) => [...items]);
    } else {
      setItems((items) => [...items, item]);
    }
  }

  function handleItemDelete(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleItemCheck(id) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItems(updatedItems);
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear items ?");
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleItemDelete={handleItemDelete}
        handleCheck={handleItemCheck}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
