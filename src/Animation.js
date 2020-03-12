import React, { Component } from 'react';

class Animation extends Component {
  state = {
    xPos: 0,
    dx: 25,
    yPos: 0,
    dy: 24,
    mouseX: 0,
    mouseY: 0,
  }

  componentDidMount() {
    this.ticker = setInterval(() => {
      this.nextStep()
    }, 500)
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.xPos < 0) {
      // do something
      this.setState({
        xPos: 1,
        dx: 8,
      })
    }
    if (prevState.xPos > this.props.width - boxWidth) {
      // do something
      this.setState({
        xPos: this.props.width - boxWidth - 1,
        dx: -8,
      })
    }
    if (prevState.yPos < 0) {
      this.setState({
        yPos: 1,
        dy: 5,
      })
    }
    if (prevState.yPos > this.props.height - boxHeight) {
      this.setState({
        yPos: this.props.height - boxHeight - 1,
        dy: -5,
      })
    }
  }


  nextStep() {
    const { xPos, dx, yPos, dy, } = this.state;
    this.setState({
      xPos: xPos + dx,
      yPos: yPos + dy,
    })
  }

  locationClicked = (e) => {
    const { mouseX, mouseY, } = this.state;
    this.setState({
      mouseX: e.screenX,
      mouseY: e.screenY,
    })
    //if mouseX == xPos && mouseY == yPos
      // // some method that override componentDidMount and
      // // stops animation. - You won the game! 
  }

  render() {
    const { width, height } = this.props;
    const { xPos } = this.state;
    const { yPos } = this.state;
    const { mouseX } = this.state;
    const { mouseY } = this.state;
    return (
      <div>
        <div style={{ ...styles.container, width: width, height }} onClick={this.locationClicked}>
          <div style={{ ...styles.moveMe, left: xPos, top: yPos, }}>
          </div>
        </div>
        <div style={{...styles.mouseInfoBox}}>
        <p>Click anywhere inside the box:</p>
        <p>Mouse Location: X-coord: {mouseX} Y-Coord: {mouseY}</p>
        </div>
      </div>
    )
  }

};
const boxWidth = 60;
const boxHeight = 60;
const styles = {
  container: {
    border: '1px solid black',
    backgroundColor: 'darkgrey',
    position: 'relative',
    margin: '15px',
  },
  moveMe: {
    position: 'absolute',
    height: boxWidth,
    width: boxWidth,
    backgroundColor: '#990040',
    borderRadius: '50%',
  },
  mouseInfoBox: {
    border: '2px solid black',
    backgroundColor: 'black',
    color: 'white',
    
  }
};

export default Animation;