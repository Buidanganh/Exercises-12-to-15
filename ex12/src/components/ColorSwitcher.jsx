import { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("");

  return (
    <div>
      <h2>5. Color Switcher</h2>

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div
        style={{
          width: "200px",
          height: "200px",
          marginTop: "20px",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;