import React, { Component } from "react";
import OurModal from "./components/modal";
class App extends Component {
  state = {
    isModelOpen: false,
  };
  switchModal =()=>{
    this.setState({ isModelOpen: !this.state.isModelOpen });
  }
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <button onClick={this.switchModal}>Open Modal</button>
        <OurModal isModelOpen={this.state.isModelOpen} switchModal={this.switchModal} />
      </div>
    );
  }
}

export default App;
