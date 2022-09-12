import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Table.css";
import { normalizeText } from "../../../utils/utils";

import Entries from "./Entries";
import Search from "./Search";
import Table from "./Table";
import TableFooter from "./TableFooter";
import Pagination from "./Pagination";

export default function MyTable({ labels, data }) {
  const initialState = data;

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setrowPerPage] = useState(5);

  //sort and search
  const [sortedData, setSortedData] = useState(initialState);
  const [isSearching, setIsSearching] = useState(false);
  const [sort, setSort] = useState({
    column: "",
    isDesc: true,
  });

  // (currentPage-1 = mise à zéro) x rowPerPage+1 (car on attaque par un index 0 donc ajoute +1)
  const minRows = currentPage === 1 ? 1 : (currentPage - 1) * rowPerPage + 1;

  const maxRows =
    currentPage * rowPerPage < sortedData.length
      ? currentPage * rowPerPage
      : sortedData.length;

  const maxFilteredShow =
    //(2pages*5lignes) est ce que 10lignes < le tableau de données ? si oui affiche les 10 lignes si non le tableau de données
    currentPage * rowPerPage < sortedData.length
      ? currentPage * rowPerPage
      : sortedData.length;

  //fix le nombre de ligne de disponible
  //  set the number of lines to display
  const handleEntriesChange = (evt) => {
    //Poste par page (récupère le nombre indiqué)
    setrowPerPage(parseInt(evt.target.value));
    setCurrentPage(1);
  };

  // Sort
  const sorting = (label) => {
    //trie dans l'orde croissant (alphabétique)
    //Sort in ascending order (alphabetical)
    const sorted = sortedData.sort((gauche, droit) => {
      const labelgauche = normalizeText(gauche[label]);
      const labeldroit = normalizeText(droit[label]);

      if (sort.isDesc) {
        if (labelgauche < labeldroit) return -1;
        if (labelgauche > labeldroit) return 1;
      } else {
        if (labelgauche < labeldroit) return 1;
        if (labelgauche > labeldroit) return -1;
      }

      return 0;
    });

    return sorted;
  };

  // définir le tri descendant ou ascendant
  // set sort descending or ascending
  const handleSort = (label) => {
    if (sort.column === label) {
      setSort({
        column: label,
        isDesc: !sort.isDesc,
      });
    } else {
      setSort({
        column: label,
        isDesc: !sort.isDesc,
      });
    }

    const sorted = sorting(label);

    setSortedData(sorted);
  };

  return (
    <div className="MyTable">
      <div className="table-utils">
        <Entries value={rowPerPage} handleChange={handleEntriesChange} />
        <Search
          //Les données
          sortedData={sortedData}
          //manipuler(récupérer) les données affiché
          handleDisplayedData={setSortedData}
          //indique si il y a une recherche
          searchingState={setIsSearching}
          //Si suppression de la recherche reprise des data originel
          resetSearching={data}
        />
      </div>
      <Table
        //Les données
        sortedData={sortedData}
        // Les labels
        labels={labels}
        //Ligne min
        minRows={minRows}
        //Ligne max
        maxRows={maxRows}
        // au clic définir le tri descendant ou ascendant
        handleSort={handleSort}
        //trie par défault modifiable
        sort={sort}
      />
      <div className="table-footer">
        <TableFooter
          //Ligne max
          maxRows={maxRows}
          //nombre de donnée suite au trie
          totalEntries={sortedData.length}
          //indique si il y a une recherche
          isSearching={isSearching}
          //le maximum de donnée à affiché
          maxFilteredShow={maxFilteredShow}
          //la totalité des donnée
          totalEntriesShow={data.length}
        />
        <Pagination
          //nombre de donnée suite au trie
          totalEntries={sortedData.length}
          //nombre de ligne par page a affiché
          displayedEntries={rowPerPage}
          //au clic effectué le changement de pages
          handleClick={setCurrentPage}
          //Mise en page de la page actuel
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

MyTable.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
