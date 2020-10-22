import React ,{useState,useEffect} from "react";
import RecipeList from "./Recipelist";
import "../css/app.css"
import { v4 as uuidv4 } from 'uuid';
import Recipeedit from "./Recipeedit";

export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
    const [recipes,setRecipes]= useState(sampleRecipes)
    const [selectedRecipeId,setSelectedRecipeId] = useState()

    const selectedrecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

    useEffect(()=>{
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON !== null){ setRecipes(JSON.parse(recipeJSON))}

    },[])
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
    },[recipes])

    function handleRecipeAdd(){
        const newRecipe = {
            id:uuidv4(),
            name:"",
            servings:1,
            cookTime:'',
            instructions:"",
            ingredients:[
                {id:uuidv4(),name:'',amount:''}
            ]
        }
        setSelectedRecipeId(newRecipe.id)
        setRecipes([...recipes,newRecipe])
    }
    function handleRecipeDelete(id){
        if(selectedRecipeId!==null && selectedRecipeId===id){
            setSelectedRecipeId(undefined)
        }
        setRecipes(recipes.filter(recipes=>recipes.id !== id))
    }

    const recipeContextValue = {
        handleRecipeDelete,
        handleRecipeAdd,
        handleRecipeSelect,
        handleRecipeChange
    }





    function handleRecipeSelect(id){
        setSelectedRecipeId(id)
    }

    function handleRecipeChange(id,recipe){
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(r => r.id ===id)
        newRecipes[index] = recipe
        setRecipes(newRecipes)
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes}/>
            {selectedrecipe && <Recipeedit recipe={selectedrecipe}/>}
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
