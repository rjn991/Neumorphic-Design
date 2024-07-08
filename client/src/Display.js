import Navbar from "./Navbar/Navbar";
import { Component } from "react";
import classes from './Display.module.css'
import DisplayUsers from "./DisplayUsers/DisplayUsers";
import DisplayModal from "./DisplayModal/DisplayModal";
class Display extends Component {
  state = {
    showDisplayModal:false,
    currentUserId:""
  }
  updateDisplayModal = (modalState,userid) => {
    this.setState({
    showDisplayModal:modalState,
    currentUserId:userid
    })
  }
  render() {
    return (
      <div className={classes.Display}>
        <Navbar></Navbar>
        <DisplayUsers updateDisplayModal={this.updateDisplayModal}></DisplayUsers>
        {this.state.showDisplayModal && <DisplayModal updateDisplayModal={this.updateDisplayModal} currentUserId={this.state.currentUserId}></DisplayModal>}
      </div>
    );
  }
}

export default Display;
