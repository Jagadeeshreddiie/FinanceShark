import React, { useState } from "react";
import Card from "./../Card/Card";
import "./CardList.css";
interface Props { 
  cardData:Array<{
    companyName?: string;
    ticker?: string;
    price?: number; 
  }>
}

const CardList = ({cardData}: Props) => {
  const [list,setList]=useState(cardData)
  console.log(list);
  return (
    <div className="CardList">
      {
          list.map((item,index)=>{
            return <Card key={index} 
            companyName={item.companyName}
            price={item.price}
            ticker={item.ticker}
            />
          })
      }
      
    </div>
  )
}

export default CardList