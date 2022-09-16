export default function ModalContainer({ texte, close }) {

  document.addEventListener("click",
  
    function (event) {
      // If user either clicks on the button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".button-close-modal") ||
        !event.target.closest(".ModalMessage")
      ) {
        closeModal();
      }
    },
    false
  );

  function closeModal() {
    document.querySelector(".ModalContainer").style.display = "none";
  }

  return (
    <>
      <div className="ModalContainer">
        <div className="ModalMessage">
          <p> {texte} </p>
          <div className="ModalButton">
            <button className="button-close-modal" onClick={closeModal}>
              {close}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
