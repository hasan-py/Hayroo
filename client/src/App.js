import React, { Fragment, useReducer, useEffect } from "react";
import Routes from "./components";
import { LayoutContext, layoutState, layoutReducer } from "./components/shop";

function App() {
  const [data, dispatch] = useReducer(layoutReducer, layoutState);
  
  // Apply dark class to document on initial load and when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (data.darkMode) {
      root.classList.add("dark");
      body.classList.add("dark");
      // Also set a data attribute for CSS targeting
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [data.darkMode]);
  
  return (
    <Fragment>
      <LayoutContext.Provider value={{ data, dispatch }}>
        <Routes />
      </LayoutContext.Provider>
    </Fragment>
  );
}

export default App;
