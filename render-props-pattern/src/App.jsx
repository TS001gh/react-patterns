import React, { useState } from "react";

const Toggle = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      onClick={handleIsOpen}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      {render(isOpen)}
    </div>
  );
};

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Render Props Pattern Examples</h2>

      {/* Example 1: Simple text indicator */}
      <Toggle
        render={(isOpen) => <p>The dialog is {isOpen ? "open" : "closed"}</p>}
      />

      {/* Example 2: Toggle button text */}
      <Toggle
        render={(isOpen) => (
          <button style={{ padding: "8px 16px" }}>
            {isOpen ? "Hide Details" : "Show Details"}
          </button>
        )}
      />

      {/* Example 3: Conditional content display */}
      <Toggle
        render={(isOpen) => (
          <div>
            <p>Click to toggle</p>
            {isOpen && (
              <div style={{ marginTop: "10px", color: "#666" }}>
                Hidden content is now visible!
              </div>
            )}
          </div>
        )}
      />

      {/* Example 4: Icon or emoji change */}
      <Toggle
        render={(isOpen) => (
          <span style={{ fontSize: "24px" }}>{isOpen ? "😊" : "😴"}</span>
        )}
      />

      {/* Example 5: Complex UI with state */}
      <Toggle
        render={(isOpen) => (
          <div
            style={{ border: isOpen ? "2px solid green" : "2px solid gray" }}
          >
            <p>Status: {isOpen ? "Active" : "Inactive"}</p>
            {isOpen && (
              <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
                <p>Additional information here</p>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            )}
          </div>
        )}
      />

      {/* Example 6: Progress indicator */}
      <Toggle
        render={(isOpen) => (
          <div>
            <div
              style={{
                width: "100px",
                height: "10px",
                backgroundColor: "#e0e0e0",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: isOpen ? "100%" : "0%",
                  height: "100%",
                  backgroundColor: "#4caf50",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        )}
      />
    </div>
  );
}
