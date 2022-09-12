import ModalContainer from "./ModalContainer.jsx";

import "./modaltest.css";

export default function Modal({onCloseModal}) {
  return (
    <>
      <ModalContainer onClick={onCloseModal}/>
    </>
  );
}