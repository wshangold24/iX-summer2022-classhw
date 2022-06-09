import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Recipe } from "../models/recipe.js";

class RecipeService {
  constructor() {
    this.collection = "recipes";
  }

  // create
  async createRecipe(recipe) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, {
      name: recipe.name,
      desc: recipe.desc,
    });

    recipe.id = docRef.id;
    return recipe;
  }

  // read
  async fetchRecipes() {
    const q = query(collection(db, this.collection));
    const querySnapshot = await getDocs(q);
    const tasks = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      tasks.push(new Recipe(doc.id, data.name, data.desc));
    });
    return tasks;
  }

  // delete
  async deleteRecipe(recipeId) {
    const docReference = doc(db, this.collection, recipeId);
    await deleteDoc(docReference);
  }
}

const service = new RecipeService();
export default service;
