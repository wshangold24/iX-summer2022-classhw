import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import { Recipe } from "./models/recipe";

function App() {
  const [recipes, setRecipes] = useState([]);

  async function addRecipe(name, desc) {
    const recipe = new Recipe(recipes.length + 1, name, desc);
    console.log(recipe);

    setRecipes([...recipes, recipe]);
    setTimeout(console.log(recipes), 5000);
    // console.log(recipes);
  }

  async function onRecipeRemove(recipeId) {
    setRecipes(
      recipes.filter((r) => {
        return recipeId !== r.id;
      })
    );
  }

  return (
    <div className="App w-100 p-0">
      <h1 className="my-3">Recipes</h1>
      <img
        className="w-25 mx-auto my-5"
        src="https://i.pinimg.com/736x/ba/ef/81/baef810656fd089e21605112f72ebb41--play-mats-play-doh.jpg"
        alt="Plate and tableware"
      ></img>
      <RecipeForm addRecipe={addRecipe} />
      <div className="card card-body text-center mx-auto">
        <h2>Your Recipes</h2>
        <RecipeList recipes={recipes} onRecipeRemove={onRecipeRemove}/>
      </div>
    </div>
  );
}

export default App;
