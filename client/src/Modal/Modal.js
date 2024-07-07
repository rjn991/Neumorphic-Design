import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modal}>
        <p>Data Uploaded Successfully</p>
        <br></br>
        <input
          type="button"
          value="Close"
          onClick={() => props.updateModal(false)}
        ></input>
      </div>
    </div>
  );
};
export default Modal;
