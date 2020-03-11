import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WindowInfo from './WindowInfo';
import Animation from './Animation';
// import MouseInfo from './MouseInfo';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App" style={{display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} onClick={this.locationClicked}>
        <WindowInfo />
        {/* <MouseInfo /> */}
        {/* <MouseInfo /><br />  was trying to set state to print location of mouse */}
        <Animation width={600} height={600} />
        {/* add mouse position listener so when you move your mouse it shows x and y coordinates */}
        {/* passing props that will be used in styling */}
      </div>
    );
  }
}

export default App;
