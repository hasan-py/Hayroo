import React, { useContext } from "react";
import { LayoutContext } from "../index";

const DarkModeToggle = () => {
  const { data, dispatch } = useContext(LayoutContext);

  const toggleDarkMode = () => {
    dispatch({ type: "toggleDarkMode" });
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg px-2 py-2 cursor-pointer"
      title={data.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {data.darkMode ? (
        // Sun icon for light mode (when in dark mode, clicking switches to light)
        <svg
          className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode (when in light mode, clicking switches to dark)
        <svg
          className="w-8 h-8 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </div>
  );
};

export default DarkModeToggle;

