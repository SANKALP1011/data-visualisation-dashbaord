import React from "react";
import ExpensesChart from "../Charts/ExpensesChart";
import RevenueChart from "../Charts/RevenueChart";
import { HealthBox } from "./HealthBox";

export const BottomCard = () =>{
    return(
        <div className="BottomCard">
            <ExpensesChart/>
            <RevenueChart/>
            <HealthBox/>
        </div>
    )
}
export default BottomCard;