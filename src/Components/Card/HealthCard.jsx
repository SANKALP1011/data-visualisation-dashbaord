import React from "react";
import CalorieChart from "../Caloriecharts";
import StepsChart from "../StepsChart";
import WeightChart from "../WeightChart";

export const HealthCard = () =>{
    return(
        <div className="HealthCard">
            <CalorieChart/>
            <StepsChart/>
            <WeightChart/>
        </div>
    )
}
export default HealthCard;