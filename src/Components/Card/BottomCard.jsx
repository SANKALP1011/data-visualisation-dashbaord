import React from "react";
import HealthCard from "./HealthCard";
import { RandomCard } from "./RandomCard";

export const BottomCard = () =>{
    return(
        <div className="BottomCard">
            <HealthCard/>
            <RandomCard/>
        </div>
    )
}