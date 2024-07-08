import axios from "axios";
import classes from "./DisplayModal.module.css";
import { useEffect, useState } from "react";

const DisplayModal = (props) => {
  const [user, setUser] = useState([]);
  const [age, setAge] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:4000/getUser/${props.currentUserId}`)
      .then((user) => {
        setUser(user.data);
        getDOB(user.data[0].dob);
        console.log(user.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.currentUserId]);

  function getDOB(data) {
    // Getting input from html input element

    // Convert input data to usable format
    // as day,month and year
    let dob = new Date(data);
    console.log(dob);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    // Getting current date and calculating the difference
    let now = new Date();
    console.log(now);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    // Calculating the Age
    if (yearDiff < 0) console.log("invalid date");
    else if (monthDiff > 0) {
      console.log(yearDiff);
    } else if (monthDiff === 0 && dateDiff >= 0) {
      console.log(yearDiff);
    } else {
      yearDiff = yearDiff - 1;
      if (monthDiff <= 0)
        if (dateDiff > 0) monthDiff = 12 + monthDiff;
        else monthDiff = 11 - monthDiff;
    }
    if (dateDiff < 0) {
      dateDiff = 30 + dateDiff;
      monthDiff -= 1;
    }

    // Show calculated age as output
    // and invalid if wrong input is given
    if (yearDiff < 0) setAge("Invalid Date");
    else {
      const a = `${yearDiff} years  ${monthDiff}  months  ${dateDiff} days`;
      setAge(a);
    }
  }
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modal}>
        {user.map((data, pos) => {
          return (
            <div className={classes.wrapper} key={pos}>
              <div className={classes.right}>
                <p className={classes.title}>Name:</p>
                <p>{data.name}</p>
                <p className={classes.title}>Age:</p>
                <p>{age}</p>
                <br></br>
                <img
                  class={classes.imagePlaceholder}
                  src={data.image}
                  alt="profilePicture"
                ></img>
              </div>
              <div className={classes.left}>
                <p className={classes.title}>DOB:</p>
                <p>{data.dob}</p>
                <p className={classes.title}>Address 1:</p>
                <p>{data.address1}</p>
                <p className={classes.title}>Address 2:</p>
                <p>{data.address2}</p>
                <p className={classes.title}>City:</p>
                <p>{data.city}</p>
                <p className={classes.title}>State:</p>
                <p>{data.state}</p>
                <p className={classes.title}>Pincode:</p>
                <p>{data.pincode}</p>
              </div>
            </div>
          );
        })}
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
