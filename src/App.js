import React, {useState} from "react";
import Counter from "./Counter"
import Counter2 from "./Counter2"

export const MyContext = React.createContext()



function App() {
    const [mystyle,switcher] = useState("red")
    const [moistyle,sweetcher] = useState("100px")
    return (
    <MyContext.Provider value={{backgroundColor : mystyle ,borderRadius : moistyle}}>
     <Counter />
     <Counter2 />
     <button onClick={
         () =>{
             switcher(prevColor => (
                 prevColor === "red" ? "white" : 'red'
             ));
             sweetcher(prevColor => (
                 prevColor === "100px" ? "0" : '100px'
             ))
         }

     }
     >switch color</button>
        </MyContext.Provider>
  );
}

export default App;
