import React, {useState} from "react";

function NewPlantForm({onNewPlant}) {
  //add values and onChange to each value of the form
  //add state for each input on form
  //add a function for each onChange in each input
  //target the e.target.value for each function

  //for the submit, we want to...
    //fetch the data from the server and add a post
      //header and body 
    //create an object of the info that will be used there
    //prevent default


  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleNameChange(event){
    setName(event.target.value)
    console.log(name)
  };

  function handleImageChange(event){
    setImage(event.target.value)
    console.log(image)
  };

  function handlePriceChange(event){
    setPrice(event.target.value)
    console.log(price)
  };

  function handleSubmit(event){
    event.preventDefault();
    const onePlant = {
      name: name,
      image: image,
      price: price,
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-type": "application.JSON"
      }, 
      body: JSON.stringify(onePlant)
    })
    .then(response => response.json())
    .then(onNewPlant(onePlant))
    .then((data) => {
      onNewPlant(data)
      setName("")
      setPrice("")
      setImage(" ")
    } )
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleNameChange}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={handleImageChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
