import React, { memo, useRef } from "react";

const Todo = ({ todo }) => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div
      className="rounded-full border border-white px-5 py-3 select-none flex justify-between"
      onClick={() => alert(todo.text)}
    >
      <span>{todo.text}</span>

      <div className="w-6 h-6 bg-yellow-300 rounded-full text-center text-black">
        {renderCount.current}
      </div>
    </div>
  );
};

export default memo(Todo);
