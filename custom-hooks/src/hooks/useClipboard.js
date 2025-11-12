import { useState } from "react";

function useClipboard() {
  const [status, setStatus] = useState(false);

  const handleCopy = (text) => {    
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setStatus(true);
        setTimeout(() => {
          setStatus(false);
        }, 500);
      })
      .catch((error) => {
        alert('An error occurred while copying: ' + error);
      });
  };

  return { status, handleCopy };
}
export default useClipboard;
