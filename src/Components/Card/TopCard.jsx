import React from "react";
import SalesChart from "../Charts/SalesChart";
import SavingsChart from "../Charts/SavingChart";
import CustomerChart from "../Charts/CustomerChart";

export const TopCard = () =>{
    return(
        <div className="TopCard">
              <SalesChart/>
              <SavingsChart/>
               <CustomerChart/>
        </div>
    )
}
export default TopCard;