//import ModalMessage from "./ModalMessage";
export default function ModalContainer({ onCloseModal }) {
  
    // function clickMe() {
    //   alert("it's worked");
    // }

  return (
    <>
      {/* <div className="ModalContainer">
        <ModalMessage
          close={onCloseModal}
          texte="Employee Created! It's Me Luigi 😉✅"
        />
      </div> */}
      <div className="ModalContainer">
        <div className="ModalMessage">
          <p> "Employee Created! It's Me Luigi 😉✅" </p>
          <div className="ModalButton">
            <button onClick={onCloseModal}>X</button>
          </div>
        </div>
      </div>
    </>
  );
}
