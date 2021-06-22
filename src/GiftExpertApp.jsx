import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  //const categorias = ["One Punch", "Dragon Ball", "Samurai-x"];
  const [categories, setCategories] = useState(["One Punch"]);
  // const handleAdd = () => {
  //   setCategories([...categories, "DemonSlayer"]); //una opcion
  //   setCategories((cate) => [...categories, "DemonSlayer"]); //como callbabck
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
