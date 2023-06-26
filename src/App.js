import React from "react";
import LogIn from "./components/LogIn";
import Products from "./components/Products";
import SaveList from "./components/SaveList";

  function App () {

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <Products />
      <SaveList />
    </div>
    <LogIn />
  </div> 
  );
}

export default App;
