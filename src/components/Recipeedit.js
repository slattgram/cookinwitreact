import React from 'react'
import Recipeingredientedit from "./Recipeingredientedit";

export default function Recipeedit(){
    return(
        <div className={"recipe-edit"}>
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor={"name"}>Name</label>
                <input type={"text"} name={"name"} id={"name"}/>
                <label htmlFor={"cookTime"}>Cook Time</label>
                <input type={"text"} name={"cookTime"} id={"cookTime"}/>
                <label htmlFor={"servings"}>Servings</label>
                <input type={"number"} min={"1"} name={"servings"} id={"servings"}/>
                <label htmlFor={"instructions"}>Instructions</label>
                <textarea name={"instructions"} id={"instructions"}/>
            </div>
            <br />
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <Recipeingredientedit />

                <Recipeingredientedit/>
                {}

            </div>
            <div>
                <button>Add Ingredient</button>
            </div>
        </div>
    )
}