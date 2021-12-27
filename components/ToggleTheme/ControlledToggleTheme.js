import { useThemeContext } from "../../context/app-theme";
import ToggleTheme from "./ToggleTheme";

const ControlledToggleTheme = () => {
  const [state, dispatch] = useThemeContext();

  const onChange = () => {
    dispatch({ type: "UPDATE_THEME" });
  };

  return <ToggleTheme onChange={onChange} checked={state.theme} size={80} />;
};

export default ControlledToggleTheme;
