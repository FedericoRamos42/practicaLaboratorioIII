import React from "react";
import { Table } from "./Table";

const netIncomes = [
    {brand: 'McDonalds', income: 1291283}, 
    {brand: 'Burger King', income: 1927361},
    {brand: 'KFC', income: 1098463}
];

export const App = () =>{
    
    const totalIncome = netIncomes.reduce((accumulator, currentValue) => accumulator + currentValue.income, 0);
    const averageIncome = totalIncome / netIncomes.length;

    return(
        <div>
            <Table data = {netIncomes}/>
            <p>Average: ${averageIncome.toFixed(2)}</p>
        </div>
    )
}