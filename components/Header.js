import React, { memo, useRef } from "react";
import ToggleTheme from "./ToggleTheme/WrapperToggleTheme";

const Header = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <div className="rounded-md px-2 py-2 flex flex-col items-center space-y-3">
      <ToggleTheme />
      <h1 className="font-semibold text-xl">Simple To-Do List</h1>
      <p className="text-sm py-1 px-2 bg-gray-800 rounded-full w-fit text-white">
        Render {renderCount.current} times
      </p>
    </div>
  );
};

export default memo(Header);
