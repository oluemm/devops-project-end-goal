import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // prevent default submission
    // create a new object for each submission
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    // reset input fields
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Quantity</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {/* a more explicit way is Number(e.target.value) */}
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <h3>Item</h3>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
