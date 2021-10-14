import { useState } from "react";
import ConditionalApp from "./ConditionalApp";
import CounterApp from "./CounterApp";
import ErrorApp from "./ErrorApp";
import ProductApp from "./ProductApp";
import ShoppingCart from "./ShoppingCart";
function App() {
  return (
    <div className="App">
      {/*  <CounterApp /> */}
      {/*   <ConditionalApp /> */}
      {/* <ErrorApp /> */}
      {/*     <ProductApp /> */}
      <ShoppingCart />
    </div>
  );
}

export default App;
