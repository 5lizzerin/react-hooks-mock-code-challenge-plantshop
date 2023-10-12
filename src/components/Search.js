import React from "react";

function Search({searchTerm, onSearch}) {
  //want to define a function to track the value of things going in the search bar
  //add onChange to the search and add the function from above 
  //add state on plant page to be able to send state to cards and list
    //state should altar the display state so that when the display re-renders, the original list is compared to the search list and what is displayed is what is filtered
      //have everything compared to an empty string by setting initial state to useState("")
      //make search terms and plant names lowercase to compare
    //add a value={} in input of search

  function handleSearch(event){
   onSearch(event.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
