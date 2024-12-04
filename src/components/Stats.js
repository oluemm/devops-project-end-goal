export default function Stats({ items }) {
  const itemsCount = items.length;
  if (!itemsCount) {
    return (
      <footer className="stats">
        <em>Add new items to the list🚀</em>
      </footer>
    );
  }
  // const numPackedItems = items.reduce((acc, item) => (item.packed ? acc + 1 : acc), 0);
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPackedItems / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You're all set ✈"
          : `You have ${itemsCount} items on your list and you have already packed ${numPackedItems}
          ${percentPacked}%`}
      </em>
    </footer>
  );
}
