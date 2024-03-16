import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Header from "./component/header/Header";
import Cards from "./component/cards/Cards";
import Cart from "./component/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(()=> {
    fetch('foodapi.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])

  const handleCookClick = (item) =>{
    const isExist = carts.find((p) => p.recipe_id == item.recipe_id)
    if(!isExist){
      const newCarts = [...carts, item]
      setCarts(newCarts)
    }
    else{
      toast("already exist")
    }
  }




  return (
    <>
      <div>
        <Header></Header>
        <div className="flex flex-col lg:flex-row justify-center mt-6 lg:mt-12 gap-2 lg:gap-5">
          <div className="basis-[60%]">
            <Cards cards={cards} handleCookClick={handleCookClick}></Cards>
          </div>
          <div className="basis-[40%]">
            <Cart carts={carts}></Cart>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
