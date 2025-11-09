import React, { useState } from "react";

const Toggle = ({ render }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    container: {
      padding: "20px",
      margin: "20px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      height: "50px",
      backgroundColor: "#f0f0f0",
      border: "2px solid #333",
      borderRadius: "8px",
      userSelect: "none",
    },
    text: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#333",
    },
  };

  return (
    <div style={styles.container} onClick={handleIsOpen}>
      <div style={styles.text}>{render(isOpen)}</div>
    </div>
  );
};

export default Toggle;
