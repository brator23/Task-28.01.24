import React from "react";

const ClickButton = ({ handleClick, handleReset }) => {
  return (
    <div className="button">
      <button onClick={handleClick}>+</button>
      <button onClick={handleReset}>Сбросить</button>
    </div>
  );
};

export default ClickButton;