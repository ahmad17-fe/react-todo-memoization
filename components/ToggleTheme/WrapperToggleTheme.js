import { useThemeContext } from "../../context/app-theme";
import ToggleTheme from "./ToggleTheme";

const WrapperToggleTheme = () => {
  const [state, dispatch] = useThemeContext();

  const onChange = () => {
    dispatch({ type: "UPDATE_THEME" });
  };

  return <ToggleTheme onChange={onChange} theme={state.theme} size={50} />;
};

export default WrapperToggleTheme;
