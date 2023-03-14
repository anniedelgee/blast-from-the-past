import React, { Component } from 'react';
import p5 from 'p5';
import './wrapper.css';
class Sketch extends Component {
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }

  sketch = (p) => {
    p.setup = () => {
      p.createCanvas(800, 400, p.WEBGL);
      p.angleMode(p.DEGREES);
    };
    let rotation = 0;
    p.draw = () => {
      p.background('gray');
      p.stroke('white');
      p.fill(p.mouseY, 0, 0);
      p.rotateY(rotation);
      rotation += p.mouseX / 30;
      p.box(120, 60, 30);
    };
 
  };

  render() {
    return (
      <div class = "myclass" ref={(wrapper) => (this.wrapper = wrapper)}>
        {/* any additional React components can go here */}
      </div>
    );
  }
}

export default Sketch;
