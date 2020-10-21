import React from "react";
export default function ({ingredient}){
    return(
        <>
            <input className={"recipe-edit__input"}
                   value={ingredient.name}
                   type={"text"}/>
            <input className={"recipe-edit__input"}
                   value={ingredient.amount}
                   type={"text"}/>
            <button className={"btn btn--danger"}>&times;</button>
        </>
    )
}
