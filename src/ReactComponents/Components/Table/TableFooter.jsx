import React from "react";
import PropTypes from "prop-types";

/** TableFooter for Form
 * @function
 * @name Table
 * @param {number} maxRows - maximum row
 * @param {number}  totalEntries filtered data
 * @param {number} maxFilteredShow - max data filtred and showed
 * @param {number} totalEntriesShow - number entries Show
 * @param {boolean} isSearching - check if there is a search
 * @return {HTML} the modal TableFooter
 */
export default function TableFooter({
  maxRows,
  totalEntries,
  isSearching,
  maxFilteredShow,
  totalEntriesShow,
}) {
  return (
    <div className="table-footer">
      {totalEntries === 0 ? (
        <p className="table-footer-p"></p>
      ) : (
        [
          isSearching ? (
            <span
              key="entries-filtered"
              className="table-footer-p">{`result ${maxFilteredShow} of ${totalEntries} for your research`}</span>
          ) : (
            <span
              key="entries"
              className="table-footer-p">{`Showing ${maxRows} of ${totalEntriesShow} entries`}</span>
          ),
        ]
      )}
    </div>
  );
}

TableFooter.propTypes = {
  maxRows: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
  maxFilteredShow: PropTypes.number.isRequired,
  totalEntriesShow: PropTypes.number.isRequired,
  isSearching: PropTypes.bool,
};
