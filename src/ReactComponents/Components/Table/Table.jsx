import React from "react";
import PropTypes from "prop-types";

import { generateID } from "../../../utils/utils";

export default function Table({
  labels,
  minRows,
  maxRows,
  handleSort,
  sort,
  sortedData,
}) {
  const { column, isDesc } = sort;

  return (
    <table className="table-main">
      <caption className="table-title">Current Employees</caption>

      <thead>
        <tr className="table-header-row">
          {labels.map((label) => (
            <th
              key={generateID()}
              className="table-header-cells"
              onClick={() => handleSort(label.value)}>
              <div className="table-header-cell">
                <span>{label.text}</span>
                <div className="sort-icons">
                  <div
                    className={
                      column === label.value
                        ? !isDesc
                          ? "sort-icons-normal icon-normal-active"
                          : "sort-icons-normal icon-inactive"
                        : "sort-icons-normal"
                    }></div>
                  <div
                    className={
                      column === label.value
                        ? isDesc
                          ? "sort-icons-inverse icon-inverse-active"
                          : "sort-icons-inverse icon-inverse-inactive"
                        : "sort-icons-inverse"
                    }></div>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedData.length === 0 && (
          <tr>
            {/* colSpan={labels.length} = permet de mettre le texte dans la totalité du tableau en calculant le nombre de colonne qu'il possède */}
            <td className="nodata" colSpan={labels.length}>
              No data available in table
            </td>
          </tr>
        )}

        {/* Affiche la page actuel 
        Display the current page */}
        {sortedData.map((elts, index) => {
          if (index + 1 >= minRows && index < maxRows) {
            return (
              <tr key={generateID()} className="table-row">
                {Object.values(elts).map((value) => (
                  <td key={generateID()} className={"table-cell"}>
                    {value}
                  </td>
                ))}
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  sortedData: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
  minRows: PropTypes.number.isRequired,
  maxRows: PropTypes.number.isRequired,
  handleSort: PropTypes.func.isRequired,
};
