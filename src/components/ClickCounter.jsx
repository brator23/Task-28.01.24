import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../store/todoSlice";
import ClickButton from "./ClickButton";

const ClickCounter = () => {
  const numbers = useSelector((state) => state.numbers1.numbers);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increment());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div className="counter">
      <h3 className="h3">{numbers}</h3>
      <ClickButton handleClick={handleClick} handleReset={handleReset} />
    </div>
  );
};

export default ClickCounter;