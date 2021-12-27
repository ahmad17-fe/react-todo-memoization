import { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState = {
  todos: [],
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const todoContextValue = [state, dispatch];

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
