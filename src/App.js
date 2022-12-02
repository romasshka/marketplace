import React from "react";
import "./index.scss";

import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import CategoryMenu from "./components/Content/CategoryMenu.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <CategoryMenu/>
    </div>
  );
}

export default App;
