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

      // p.createCanvas(520, 380);
      let cnv= p.translate(window.innerWidth/2, window.innerHeight/2);
      p.createCanvas(400, 310);
      
    };
    
 
    
    p.draw = () => {
      // p.background(82, 235, 138)
      p.background(0);
      p.fill("#FF0FFF");
     p.rect(x, y, 50, 50);
     x += xupdate;
     y += yupdate;
 
     p.textSize(26)
     p.fill("#3DD13D");
    //  p.text(s, 20, 80, 700);
     p.textSize(20)
     p.textAlign(p.CENTER);
     p.text("Home icon to return here", 150, 180,700);
     p.text("Click Flaming Ball for ball click game", 100, 210,700);
     p.text("Click Basket Ball catch for ball catch game", 75, 240,700);
     
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
        {}
      </div>
    );
  }
}

export default Sketch;
