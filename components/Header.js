import React, { memo, useRef } from "react";
import { useThemeContext } from "../context/app-theme";
import ControlledToggleTheme from "./ToggleTheme/ControlledToggleTheme";

const UnmemoizedHeader = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div className="rounded-md px-2 py-2 flex flex-col items-center space-y-3">
      <ControlledToggleTheme />
      <h1 className="font-semibold text-xl">Simple To-Do List</h1>
      <p className="text-sm py-1 px-2 bg-gray-800 rounded-full w-fit text-white">
        Render {renderCount.current} times
      </p>
    </div>
  );
};

const MemoizedHeader = memo(UnmemoizedHeader);

export default MemoizedHeader;
