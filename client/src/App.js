import Navbar from './Navbar/Navbar';
import Form from './Form/Form'
import Modal from './Modal/Modal';
import { useState,Component } from 'react';
import classes from './App.module.css'
class App extends Component  {
  state = {
    showModal: false
  }
  updateModal = (modalState) => {
    this.setState({
      showModal:modalState
    })
  }
  render() {
    return(
      <div className={classes.App}>
      {this.state.showModal && <Modal updateModal={this.updateModal}></Modal>}
      <Navbar></Navbar>
      <Form updateModal={this.updateModal}></Form>
    </div>
    )
  }
}

export default App;
