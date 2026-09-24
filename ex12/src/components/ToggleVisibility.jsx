import { useState } from "react";

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>3. Toggle Visibility</h2>

      <button onClick={handleToggle}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;