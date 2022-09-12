// import ModalButton from "./ModalButton.jsx";

export default function ModalMessage({ texte}, {onCloseModal}) {
  document.getElementById("lu").addEventListener("click", myFunction);

  function myFunction() {
    alert("Hello World!");
  }
  return (
    <div className="ModalMessage">
      <p> {texte} </p>
      {/* <ModalButton onClick={onCloseModal} /> */}
      <div className="ModalButton" onClick={onCloseModal}>
        <button className="lu">X</button>
      </div>
    </div>
  );
}
