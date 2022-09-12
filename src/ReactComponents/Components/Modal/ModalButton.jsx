
export default function ModalButton({onCloseModal}) {


  return (
    <div className="ModalButton" onClick={onCloseModal}>
      <button>X</button>
    </div>
  );
}
