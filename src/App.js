import React, { useState, useEffect } from "react";
import "./App.css";
import "./fonts.css";

import axios from "axios";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Panier from "./components/Panier";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faPlusSquare, faMinusSquare);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [panier, setPanier] = useState([]);
  // const [price, setPrice] = usePrice([0]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-ts.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  const calculTotal = () => {
    let total = 0;
    for (let i = 0; i < panier.length; i++) {
      total = total + Number(panier[i].price) * Number(panier[i].quantity);
      console.log(total);
    }

    return Number(total.toFixed(2));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <div className="container">
          <Header data={data} />
          <div className="main">
            <Meals data={data} panier={panier} setPanier={setPanier} />
            <Panier
              panier={panier}
              setPanier={setPanier}
              calculTotal={calculTotal}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
