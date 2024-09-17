import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onPackItem, OnClearItems }) {
  const [sortBy, serSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => serSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed status</option>
        </select>
        <button onClick={OnClearItems}>Clear list</button>
      </div>
    </div>
  );
}
