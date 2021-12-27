import { useMemo } from "react";
import Header from "../components/Header";
import ControlledToggleTheme from "../components/ToggleTheme/ControlledToggleTheme";
import { useThemeContext } from "../context/app-theme";

export default function Home() {
  const [state, dispatch] = useThemeContext();

  return (
    <>
      <div
        className={`w-4/12 mx-auto my-11 rounded-md  ${
          state.theme === "dark" ? "dark-theme" : "light-theme"
        }`}
      >
        <Header />
      </div>
    </>
  );
}
