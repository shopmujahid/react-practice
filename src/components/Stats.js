export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list🚀💼</em>
      </p>
    );
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round(
    (Number(numPacked) / Number(items.length)) * 100
  );
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You packed everything and you are ready to go!!🚀"
          : `💼 You have ${items.length} items on your list, and you are already
        packed ${numPacked} items (${percentPacked} %)`}
      </em>
    </footer>
  );
}
