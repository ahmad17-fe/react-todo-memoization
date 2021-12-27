import React, { memo, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoContext } from "../context/app-todo";

const AddTodo = () => {
  const [, dispatch] = useTodoContext();
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_TODOS",
      payload: {
        id: uuidv4(),
        text,
        isDone: false,
      },
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-x-4 flex justify-center">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          required
          className="rounded-full w-9/12 h-14 bg-transparent shadow-inner border border-white px-5 focus:bg-white focus:text-black"
        />
        <button
          type="submit"
          className="rounded-full border border-white w-2/12 h-14 hover:bg-white hover:text-black"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default memo(AddTodo);
