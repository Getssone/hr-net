import ModalContainer from "./ModalContainer.jsx";

import "./modal.css";

export default function Modal({ texte, close }) {

  return (
    <>
      <ModalContainer texte={texte} close={close} />
    </>
  );
}