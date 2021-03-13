import React from "react";
import "./TableList.css";
function TableList({ countries }) {
  return (
    <div className="tableList">
      {countries.map((country) => {
        return (
          <tr>
            <td>{country.country}</td>
            <td>
              <strong>{country.cases}</strong>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default TableList;
