import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.formWrapper}>
      <div className={classes.form}>
        <form>
          <input
            className={classes.inputBox}
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <br></br>
          {/* <DatePicker placeholder="Date Of Birth"></DatePicker> */}
          <p>Date of birth</p>
          <input
            className={classes.inputBox}
            type="date"
            name="dob"
            placeholder="Address Line 1"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            name="address1"
            placeholder="Address Line 1"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            name="address2"
            placeholder="Address Line 2"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            name="city"
            placeholder="City"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            name="state"
            placeholder="State"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="number"
            name="pincode"
            placeholder="PIN Code"
          ></input>
          <br></br>
          <label for="dd">Upload Profile Picture</label>
          <br></br>
          <input
            className={classes.inputBox}
            type="file"
            name="pincode"
            placeholder="PIN Code"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="submit"
            name="Submit"
            placeholder="PIN Code"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Form;
