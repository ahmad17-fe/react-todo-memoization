import { createContext, useContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const constantTheme = {
  DARK: "dark",
  LIGHT: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState = {
  theme: constantTheme.DARK,
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
