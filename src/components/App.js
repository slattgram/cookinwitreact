import React ,{useState,useEffect} from "react";
import RecipeList from "./Recipelist";
import "../css/app.css"
import { v4 as uuidv4 } from 'uuid';
import Recipeedit from "./Recipeedit";

export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
    const [recipes,setRecipes]= useState(sampleRecipes)
    useEffect(()=>{
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON != null){ setRecipes(JSON.parse(recipeJSON))}

    },[])
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
    },[recipes])

    function handleRecipeAdd(){
        const newRecipe = {
            id:uuidv4(),
            name:"New",
            servings:1,
            cookTime:'1.00',
            instructions:"instr.",
            ingredients:[
                {id:uuidv4(),name:'name',amount:'1 Tbs'}
            ]
        }
        setRecipes([...recipes,newRecipe])
    }
    function handleRecipeDelete(id){
        setRecipes(recipes.filter(recipes=>recipes.id !== id))
    }

    const recipeContextValue = {
        handleRecipeDelete,
        handleRecipeAdd
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes}/>
            <Recipeedit/>
        </RecipeContext.Provider>
    )

}


const sampleRecipes = [
    {
        id:1,
        name:"Cheeeecken",
        servings:"6",
        cookTime: "1.45",
        instructions: "1. zaza \n 2. nini \n 3. fsda",
        ingredients: [{
            id:1,
            name:'potato',
            amount:'200 dozens'
        },{
            id:2,
            name:'cheecken',
            amount:'100 dozens'
        }]
    },
    {
        id:2,
        name:"Kraken",
        servings:"3",
        cookTime: "6.45",
        instructions: "1. zaza \n 2. nini \n 3. fsda",
        ingredients: [{
            id:1,
            name:'kraken',
            amount:'100 dozens'
        },{
            id:2,
            name:'potato',
            amount:'200 dozens'
        }]
    }


]

export default App;
