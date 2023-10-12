import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  const plantArray = plantData.map((onePlant) => {
    return <PlantCard id={onePlant.id} name={onePlant.name} image={onePlant.image} price={onePlant.price} key={onePlant.price}/>
  })
  return (
    <ul className="cards">{plantArray}</ul>
  );
}

export default PlantList;
