import { useState } from "react";

function ControlledInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>2. Controlled Input Field</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
      />

      <p>Input text: {text}</p>
    </div>
  );
}

export default ControlledInput;