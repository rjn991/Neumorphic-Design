import Navbar from "./Navbar/Navbar";
import { Component } from "react";
import classes from './Display.module.css'
import DisplayUsers from "./DisplayUsers/DisplayUsers";
import DisplayModal from "./DisplayModal/DisplayModal";
class Display extends Component {
  state = {
    showDisplayModal:false
  }
  updateDisplayModal = (modalState) => {
    this.setState({
    showDisplayModal:modalState
    })
  }
  render() {
    return (
      <div className={classes.Display}>
        <Navbar></Navbar>
        <DisplayUsers updateDisplayModal={this.updateDisplayModal}></DisplayUsers>
        {this.state.showDisplayModal && <DisplayModal updateDisplayModal={this.updateDisplayModal}></DisplayModal>}
      </div>
    );
  }
}

export default Display;
