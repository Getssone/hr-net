import React from "react";
import PropTypes from "prop-types";

import { normalizeText } from "../../../utils/utils";

/** Search for Form
 * @function
 * @name Dropdown
 * @param {array} sortedData - filtered data 
 * @param {function} handleDisplayedData - manipulate the data displayed
 * @param {function} searchingState - check searching state
 * @param {array} resetSearching - get initial data
 * @return {HTML} the modal Search
 */

// Search in every entries
export default function Search({ sortedData, handleDisplayedData, searchingState, resetSearching }) {
  //manipuler(récupérer) les élements rechercher
  const handleSearch = (evt) => {
    const searching = normalizeText(evt.target.value);
    //si valeur de la recherche et supérieur à 0
    if (searching.length > 0) {
      //récupére les datas et filtre chaque elements
      const dataToDisplay = sortedData.filter((elts) => {
        //récupére les valeurs de chaque elements

        const value = Object.values(elts)
          // crée un nouveau tableau avec les valeurs récupéré et normalise les valeurs
          .map((elt) => normalizeText(elt))
          //renvoie une nouvelle chaîne
          .join(" ");
        return value.includes(searching);
      });
      //manipuler(récupérer) les données affiché
      handleDisplayedData(dataToDisplay);
      ////indique si il y a une recherche
      searchingState(true);
    } 
    else {
      handleDisplayedData(resetSearching);
      searchingState(false);
    }
  };
  return (
    <div className="table-search">
      <label htmlFor="dtb-search">{`Search: `}</label>
      <input
        type="search"
        id="dtb-search"
        name="dtb-search"
        className="dtb-search"
        onChange={(evt) => handleSearch(evt)}
      />
    </div>
  );
}

Search.propTypes = {
  sortedData: PropTypes.array.isRequired,
  handleDisplayedData: PropTypes.func.isRequired,
  searchingState: PropTypes.func.isRequired,
};
