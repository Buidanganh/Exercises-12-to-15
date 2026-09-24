import { useState } from "react";

function DragDropList() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();

    if (draggingItem === null) {
      return;
    }

    if (draggingItem === index) {
      return;
    }

    const newItems = [...items];

    const draggedItem = newItems[draggingItem];

    newItems.splice(draggingItem, 1);

    newItems.splice(index, 0, draggedItem);

    setItems(newItems);
    setDraggingItem(index);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div>
      <h2>7. Drag and Drop List</h2>

      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragDropList;