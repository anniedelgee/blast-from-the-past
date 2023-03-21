import React, { Component } from 'react';
import p5 from 'p5';
import './canvas.css';
class Sketch extends Component {
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }


  sketch = (p) => {
   
    p.setup = () => {

      p. createCanvas(window.innerWidth, window.innerHeight);
    };
    
    p.draw = () => {
      p.translate(window.innerWidth/2, window.innerHeight/2);//cneter point is middle of screen
      p.rectMode(p.CENTER);//makes rectangle centre to center, not aligned by top left corner
      //largest top rectanlge
      p.stroke('#952E33')
      p.strokeWeight(4);
      p.fill('#C9BCB3');
      p.rect(0, 0, 540, 440, 5);
      //second largest top rectanlge
      p.stroke('#952E33')
      p.strokeWeight(4);
      p.fill('#C9BCB3');
      p.rect(0, 0, 520, 420, 10);
      //third largest (black) top rectanlge
      p.noStroke();
      p.fill('#000000');
      p.rect(0, 0, 490, 400, 10);
      //red top rectanlge
      p.noStroke();
      p.fill('#952E33');
      p.rect(0, 0, 470, 370, 10);
      //screen space
      p.noStroke();
      p.fill('#000000');
      p.rect(0, 0, 400, 310, 50);
      //lower part of monitor- buttons for games
      p.stroke('#952E33')
      p.strokeWeight(4);
      p.fill('#C9BCB3');
      p.rect(0, 270, 540, 100, 5);
      //red band 
      p.noStroke()
      p.strokeWeight(4);
      p.fill('#952E33');
      p.rect(0, 290, 540, 35, 5); 
      //buttons box
      p.stroke('#952E33')
      p.strokeWeight(4);
      p.noFill();
      p.rect(0, 270, 540, 25, 5); 
      //red lining button
      p.noStroke()
      p.fill('#952E33');
      p.rect(0, 239, 170, 34, 1); 
      //black centre button
      p.noStroke()
      p.fill('#000000');
      p.rect(0, 239, 150, 41, 2); 
      //long red side button
      p.noStroke()
      p.fill('#952E33');
      p.rect(160, 239, 80, 20, 1); 
      //short green side button
      p.noStroke()
      p.fill('#28AD00');
      p.rect(230, 239, 20, 20, 1);
 
    };
  };

  render() {
    return (
      <div class = "myclass" ref={(wrapper) => (this.wrapper = wrapper)}>
        {}
      </div>
    );
  }
}

export default Sketch;

