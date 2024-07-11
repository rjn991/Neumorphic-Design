import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./DisplayUsers.module.css";
const DisplayUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.ranjan.tech/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userData = users.map((user, pos) => {
    return (
      <li className={classes.list} key={user._id}>
        <span>
          {user.name}
        </span>
        <p onClick={() => props.updateDisplayModal(true, user._id)}>
          View Details
        </p>
        <br></br>
      </li>
    );
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <ol className={classes.orderList}>{userData}</ol>
      </div>
    </div>
  );
};
export default DisplayUsers;
