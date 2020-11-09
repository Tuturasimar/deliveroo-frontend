import React, { useState, useEffect } from "react";
import "./App.css";
import "./fonts.css";

import axios from "axios";
import Header from "./components/Header";
import Meals from "./components/Meals";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-ts.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
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
          <div>
            <Meals data={data} />
          </div>
        </div>
      )}
    </>
  );
}
export default App;
