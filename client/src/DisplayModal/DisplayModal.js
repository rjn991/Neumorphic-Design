import classes from "./DisplayModal.module.css";
const DisplayModal = (props) => {
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modal}>
        <p>Data Uploaded Successfully</p>
        <br></br>
        <input
          type="button"
          value="Close"
          onClick={() => props.updateDisplayModal(false)}
        ></input>
      </div>
    </div>
  );
};
export default DisplayModal;
