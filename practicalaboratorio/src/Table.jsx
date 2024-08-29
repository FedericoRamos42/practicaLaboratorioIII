import React from "react";
import PropTypes from 'prop-types'; 
export const Table = ({data}) =>{
    return(
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Income</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,i) => (
                    <tr key = {i}>
                        <td>{item.brand}</td>
                        <td>${item.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) 
}
Table.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        brand: PropTypes.string.isRequired,
        income: PropTypes.number.isRequired
      })
    ).isRequired
};
  
