import React, { Component } from 'react';
import p5 from 'p5';
import './canvas.css';
class Sketch extends Component {
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }


  sketch = (p) => {
    var x = 10;
    var y = 100;

    var xupdate = 2;
    var yupdate = 1;

    p.setup = () => {
      p.createCanvas(520, 380);
    };

    p.draw = () => {
      p.background(100)
     p.rect(x, y, 50, 50);
     x += xupdate;
     y += yupdate;
 
     if (x > p.width || x <= 0) {
       xupdate *= -1;
     }
   
     if (y > p.height || y <= 0) {
       yupdate *= -1;
     }
 
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
