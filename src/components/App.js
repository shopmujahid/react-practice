import { useState } from "react";
import Logo from "./logo";
import { PackingList } from "./PackingList";
import Form from "./Form";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((t) => t.id !== id));
  }

  function handlePackItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
        OnClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
