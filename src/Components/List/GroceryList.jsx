import React, { useEffect, useState } from "react";
import GroceryData from "../../Data/GroceryData.json"

export const GroceryList = () =>{
    const [grocery,setGrocery] = useState([]);
    
    const fetchGroceries = () =>{
       setGrocery(GroceryData)
    }

    useEffect(()=>{
        fetchGroceries()
    },[])

    return<>
        <div className="GroceryList">
            {grocery.map((value)=>
            <ul>
                <li>
                <h2>{value.name}</h2>
                </li>
            </ul>
                )}
        </div>
        </>

}
export default GroceryList;