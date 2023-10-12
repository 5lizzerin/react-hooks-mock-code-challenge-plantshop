import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

 const [displayPlants, setDisplayPlants] = useState([])
 const [searchTerm, setSearchTerm] = useState("")

 function getPlantUrl() {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  .then(plantData => setDisplayPlants(plantData))
 };

 useEffect(getPlantUrl, [])

 function handleNewPlant(onePlant){
  setDisplayPlants([onePlant, ...displayPlants])
 };

 function onSearch(searchString){
  setSearchTerm(searchString)
 };

 const filterPlants = displayPlants.filter((plant) => {
  const lowerCaseName = plant.name.toLowerCase();
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return lowerCaseName.includes(lowerCaseSearchTerm)
 });

  return (
    <main>
      <NewPlantForm onNewPlant={handleNewPlant} />
      <Search onSearch={onSearch}/>
      <PlantList plantData={filterPlants}/>
    </main>
  );
}

export default PlantPage;
