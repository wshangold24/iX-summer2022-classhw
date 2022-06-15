import React, { useState } from "react";
import Spinner from "../common/Spinner";

import './RecipeForm.css';

export default function RecipeForm(props) {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDesc, setRecipeDesc] = useState("");
  const [saving, setSaving] = useState(false);

  async function onRecipeFormSubmit(e) {
    e.preventDefault();

    // start showing spinner
    setSaving(true);
    await props.addRecipe(recipeName, recipeDesc);
    setSaving(false);
    // stop showing spinner

    setRecipeName("");
    setRecipeDesc("");
  }

  return (
    <div>
      <form onSubmit={onRecipeFormSubmit} className="w-75 mx-auto">
        <div className="mb-3">
          <label htmlFor="recipe-name-input" className="w-100 form-label">
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
          <label htmlFor="recipe-desc-input" className="w-100 form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="recipe-desc-input"
            rows="10"
            placeholder="Type in your recipe here"
            onChange={(e) => setRecipeDesc(e.target.value)}
            value={recipeDesc}
          ></textarea>
          <button className="btn btn-outline-secondary w-100 mx-auto my-3" type="submit" disabled={saving}>
            {saving ? <Spinner /> : "+"}
          </button>
        </div>
      </form>
    </div>
  );
}
