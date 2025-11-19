import React, { useState } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import cardData from "./Extras/data";

function App() {

  const [data,setData]=useState(cardData());
  return (
    <>
      <CardList cardData={data}/>
    </>
  );
}
export default App;
