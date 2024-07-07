import Navbar from "./Navbar/Navbar";

import { useState, Component } from "react";
import classes from './Display.module.css'
class Display extends Component {
  render() {
    return (
      <div className={classes.Display}>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default Display;
