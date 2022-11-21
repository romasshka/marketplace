import React from "react";
import "./index.scss";

import Header from "./components/header/Header";
import Navigation from "./components/Navigation/Navigation";
import CategoryMenu from "./components/Content/CategoryMenu";

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
