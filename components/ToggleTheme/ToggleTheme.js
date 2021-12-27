import DarkModeToggle from "react-dark-mode-toggle";
import { constantTheme } from "../../context/app-theme";

const ToggleTheme = ({ onChange, theme, size }) => {
  return (
    <div className="flex space-x-2">
      <DarkModeToggle
        onChange={onChange}
        checked={theme === constantTheme.DARK ? true : false}
        size={size}
      />
      <span className="capitalize">Mode {theme}</span>
    </div>
  );
};

export default ToggleTheme;
