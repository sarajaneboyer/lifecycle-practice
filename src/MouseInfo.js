import React, { Component } from 'react';
import './App.css';


//I think I need to turn this into a function
// send props in in Animation.js and then send them back
// with a handleClick method or a componentDidMount??







class MouseInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
  }

  locationClicked = (e) => {
    const { mouseX, mouseY, } = this.state;
    this.setState({
      mouseX: e.screenX,
      mouseY: e.screenY,
    })
  }

  render() {
    const { mouseX } = this.state;
    const { mouseY } = this.state;
    return (
      <div>
        <p>Click anywhere inside the box:</p>
        <p>Mouse Location: X-coord: {mouseX} Y-Coord: {mouseY}</p>
      </div>
    );
  }
};


export default MouseInfo;