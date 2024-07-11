import classes from "./Form.module.css";
import { useState } from "react";
const Form = (props) => {
  const [name, setName] = useState("");
  const [dob, setDOb] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [pincode, setPincode] = useState("");
  const [image, setImage] = useState("");
  const [valid, setValid] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      try {
        const response = await fetch("https://api.ranjan.tech/insert", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            dob,
            address1: add1,
            address2: add2,
            city,
            state,
            pincode,
            image,
          }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        // console.log(response.json())
        const result = await response.json();
        console.log(result);
        props.updateModal(true);
        setName("")
        setDOb("")
        setAdd1("")
        setAdd2("")
        setCity("")
        setState("")
        setPincode("")
        setImage("")
      } catch (error) {
        console.log(error);
      }
    }
  }

  // useEffect(() => {
  //   console.log(name,dob); // This will log the updated state whenever 'name' changes
  // }, [name,dob]);
  const handleImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  };

  return (
    <div className={classes.formWrapper}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <br></br>
          <p>Date of birth</p>
          <input
            className={classes.inputBox}
            type="date"
            value={dob}
            required
            onChange={(e) => {
              setDOb(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="Address Line 1"
            required
            value={add1}
            onChange={(e) => {
              setAdd1(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="Address Line 2"
            required
            onChange={(e) => {
              setAdd2(e.target.value);
            }}
            value={add2}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="State"
            required
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={[classes.inputBox, classes.inputNumber].join(" ")}
            type="number"
            placeholder="PIN Code"
            required
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          ></input>
          <br></br>

          <label>
            Upload Profile Picture<br></br>
          </label>
          {!valid && <p className={classes.valid}>Max Size is 1MB jpg/jpeg/png</p>}
          <input
            className={classes.inputBox}
            required
            onChange={(e) => {
              if (
                e.target.files[0].size < 1048576 &&
                (e.target.files[0].type === "image/jpeg" ||
                  e.target.files[0].type ==="image/jpg" ||
                  e.target.files[0].type === "image/png")
              ) {
                setValid(true);
                handleImage(e);
              } else {
                setValid(false);
              }
            }}
            type="file"
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="submit"
            name="Submit"
            value="Submit"
            placeholder="PIN Code"
          ></input>
        </form>
      </div>
      {/* <img src={image}></img> */}
    </div>
  );
};

export default Form;
