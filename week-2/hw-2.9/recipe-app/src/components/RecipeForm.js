import React from "react";
import { useState } from "react";

export default function RecipeForm(props) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  let [recipe, setRecipe] = useState({
      name: "",
      desc: ""
  });

  function onRecipeFormSubmit(e) {
    e.preventDefault();
    // console.log(recipeName);
    recipe = {
        name: recipeName,
        desc: recipeDesc
    };
    setRecipe(recipe);
    // console.log(recipe);

    props.addRecipe(recipeName, recipeDesc);
    setRecipeName("");
    setRecipeDesc("");
    setRecipe({
        name: "",
        desc: ""
    });
  }

  return (
    <div>
      <form onSubmit={onRecipeFormSubmit} className="w-75 mx-auto">
        <div className="mb-3">
          <label htmlFor="recipe-name-input" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Recipe"
            id="recipe-name-input"
            onChange={(e) => setRecipeName(e.target.value)}
            value={recipeName}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="recipe-desc-input" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="recipe-desc-input"
            rows="5"
            placeholder="Type in your recipe here"
            onChange={(e) => setRecipeDesc(e.target.value)}
            value={recipeDesc}
          ></textarea>
          <button className="btn btn-outline-secondary w-100 mx-auto my-3" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
