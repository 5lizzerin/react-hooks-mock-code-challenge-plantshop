import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;


//APP HIERARCHY

//App
    //Header
    //PlantPage => initial state, fetch data
        //Search => search state
        //NewPlantForm => form inputs
        //PlantList => map through data
            //PlantCard => display data