import DarkModeToggle from "react-dark-mode-toggle";

const ToggleTheme = ({ onChange, checked, size }) => {
  return (
    <DarkModeToggle
      onChange={onChange}
      checked={checked === "dark" ? true : false}
      size={size}
    />
  );
};

export default ToggleTheme;
