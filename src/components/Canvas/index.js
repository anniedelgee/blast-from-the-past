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
    let s = "Pick a game from the stickers at the side!";
    p.setup = () => {

      p.createCanvas(520, 380);
 
      
    };
    
 
    
    p.draw = () => {

      p.background(0);
      p.fill("#FF0FFF");
     p.rect(x, y, 50, 50);
     x += xupdate;
     y += yupdate;
 
     p.textSize(26)
     p.fill("#3DD13D");
  
     p.textSize(20)
   
     p.text("Home icon to return here", 150, 110,700);
     p.text("Click Flaming Ball for ball click game", 100, 140,700);
     p.text("Click Basket Ball catch for ball catch game", 75, 170,700);
     
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
      <div className="screensaver" ref={(wrapper) => (this.wrapper = wrapper)}>
        {}
      </div>
    );
  }
}

export default Sketch;
