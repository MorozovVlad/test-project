import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  return <User />;
}

function User() {
  const theme = useContext(ThemeContext);
  return <div>Тема: {theme}</div>;
}