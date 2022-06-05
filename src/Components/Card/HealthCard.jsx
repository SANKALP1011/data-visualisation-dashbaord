import React from "react";
import CalorieChart from "../Charts/Caloriecharts";
import StepsChart from "../Charts/StepsChart";
import WeightChart from "../Charts/WeightChart";

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