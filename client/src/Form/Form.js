import classes from "./Form.module.css";
import { useState, useEffect } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [dob, setDOb] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [add1, setAdd1] = useState("");
  const [add2, setAdd2] = useState("");
  const [pincode, setPincode] = useState("");
  const [image,setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/insert", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          dob,
          address1: add1,
          address2: add2,
          city,
          state,
          pincode,
          image
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":"*"
        },
      });
      // console.log(response.json())
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log(name,dob); // This will log the updated state whenever 'name' changes
  // }, [name,dob]);
  const handleImage = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result)
    }
    reader.onerror = (error) => {
      console.log("error", error)
    }
  };

  return (
    <div className={classes.formWrapper}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="Name"
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
            onChange={(e) => {
              setDOb(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="text"
            placeholder="Address Line 1"
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
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            className={classes.inputBox}
            type="number"
            placeholder="PIN Code"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          ></input>
          <br></br>
          <label for="dd">Upload Profile Picture</label>
          <br></br>
          <input
            className={classes.inputBox}
            onChange={handleImage}
            type="file"
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
      <img src={image}></img>
    </div>
  );
};

export default Form;
