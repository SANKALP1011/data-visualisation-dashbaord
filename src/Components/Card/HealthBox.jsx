import React, { useState } from "react";
import HealthCard from "./HealthCard";

export const HealthBox = () =>{
    const [healthCard,setHealthCard] = useState(false);

    return<>
      <div className="HealthBox">
          <h1>Activity</h1>
          <button onClick={()=>{setHealthCard(true)}}>Health</button>
          {healthCard === true && <healthCard/>}
      </div>
    </>
}