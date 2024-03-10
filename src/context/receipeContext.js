import React, { createContext, useState } from "react";

export const ReceipeContext = createContext(null);
const FORKIFY_KEY = "f75ba8a4-a432-44e1-ac02-61ac61c6c4db";

export default function ReceipeState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [receipes, setReceipes] = useState([]);

  async function handleGetReceipes(e) {
    e.preventDefault();
    setLoading(true);
    const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}&key=${FORKIFY_KEY}`;

    try {
      const fetchRecipes = await fetch(url);
      const recipeData = await fetchRecipes.json();

      console.log(recipeData);
      if (
        recipeData.status &&
        recipeData.data &&
        recipeData.data.recipes.length
      ) {
        setReceipes(recipeData.data.recipes);
      } else {
        setReceipes([]);
      }

      setSearch("");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <ReceipeContext.Provider
      value={{ search, setSearch, loading, error, receipes, handleGetReceipes }}
    >
      {children}
    </ReceipeContext.Provider>
  );
}
