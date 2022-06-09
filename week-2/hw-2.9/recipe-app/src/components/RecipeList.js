import React from "react";
import './RecipeList.css';

export default function RecipeList(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col-3">Name</th>
            <th className="col-7">Description</th>
            <th className="col-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.recipes.map((r) => (
            <tr key={r.id}>
              <td className="col-3">{r.name}</td>
              <td className="col-9">{r.desc}</td>
              <td>
                <div onClick={(e) => props.onRecipeRemove(r.id)}>
                  <i className="bi bi-trash"></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
