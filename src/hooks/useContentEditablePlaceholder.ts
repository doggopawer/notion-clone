import { FocusEventHandler } from "react";

const useContentEditablePlaceholder = (placeholder: string) => {
  const handleFocus: FocusEventHandler = (e) => {
    if (e.target.textContent === placeholder) {
      e.target.textContent = "";
    }
  };
  const handleBlur: FocusEventHandler = (e) => {
    if (e.target.textContent === "") {
      e.target.textContent = placeholder;
    }
  };

  return [handleFocus, handleBlur];
};

export default useContentEditablePlaceholder;
