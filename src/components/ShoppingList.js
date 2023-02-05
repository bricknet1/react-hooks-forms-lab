import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  
  ////////////////
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  ////////////////

  const [search, setSearchInput] = useState("")

  function handleSearch(e){
    setSearchInput(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if ((selectedCategory === "All") && (item.name.toLowerCase().includes(search.toLowerCase()))) return true;
    
    return ((item.category === selectedCategory)&&(item.name.toLowerCase().includes(search.toLowerCase())));
  });

  ////////////////////







  // const newItem = {
  //   id: uuid(),
  //   name: itemName,
  //   category: itemCategory,
  // };

  ////////////////////

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearch} 
        search={search} 
        selectedCategory={selectedCategory} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
