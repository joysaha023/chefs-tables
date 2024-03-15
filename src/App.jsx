import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import Cards from "./component/cards/Cards";
import Cart from "./component/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div>
        <Header></Header>
        <div>
          <Cards></Cards>
          <Cart></Cart>
        </div>
     </div>

     
    </>
  );
}

export default App;
