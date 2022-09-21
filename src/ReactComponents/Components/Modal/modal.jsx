import ModalContainer from "./ModalContainer.jsx";
import PropTypes from "prop-types";

import "./modal.css";

/**
 * Modal for Form
 * @function
 * @name Modal
 * @param {string} text return the desired body text
 * @param {string} close return the desired text for the button
 * @returns {HTML} the Modal
 */

export default function Modal({ texte, close }) {

  return (
    <>
      <ModalContainer texte={texte} close={close} />
    </>
  );
}
Modal.propTypes = {
  texte: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
};