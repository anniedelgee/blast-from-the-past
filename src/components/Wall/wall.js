import React, { Component } from 'react';
import p5 from 'p5';


class Sketch extends Component {
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }
sketch = (p) => {
  var wall;
  p.preLoad = () => {
    wall= p.loadImage("blast-from-the-past/public/background2.gif");
  }
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
  };
  p.draw = () => {
    p.image(wall);
  };
};
render() {
  return (
    <div ref={(wrapper) => (this.wrapper = wrapper)}>
      {}
    </div>
  );
};
};

export default Sketch