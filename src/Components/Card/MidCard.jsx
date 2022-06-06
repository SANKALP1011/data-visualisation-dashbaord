import React from "react";
import ExpensesChart from "../Charts/ExpensesChart";
import RevenueChart from "../Charts/RevenueChart";

export const MidCard = () =>{
    return(
        <div className="BottomCard">
            <ExpensesChart/>
            <RevenueChart/>
        </div>
    )
}
export default MidCard;