import React, { Component } from 'react';
import p5 from 'p5';
import './index.css';
class Sketch extends Component {
  
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }

 
  sketch = (p) => {
    var gameState = "START";
    var buttonX = 200;
    var buttonY = 200;
    var distanceToButton = 0.0;
    var score = 0;
    

    p.setup = () => {
    p.createCanvas(520, 380);
    p.textAlign(p.CENTER);
} 

p.draw = () => {
  p.background(82, 235, 138);
	
	if(gameState == "START"){
		start();
	}
	
	if(gameState == "GAMEON"){
		gameOn();
	}
	
	if(gameState == "GAMEOVER"){
		gameOver();
	}

} 


function start(){
  p.textSize(25);


  p.textSize(15);
  p.text("HOVER OVER THE CIRCLE TO INCREASE YOUR SCORE ", p.width/2,90);
  p.text("THE TIMER STOPS AT 1000 ", p.width/2,120);
	
	p.text("Click To Play", p.width/2,p.height/2);
	if(p.mouseIsPressed){
    p.frameCount = 0;
		gameState = "GAMEON";
    
	}
} 

function gameOn(){
	p.background(82, 235, 138);
  distanceToButton = p.dist(buttonX,buttonY,p.mouseX,p.mouseY);
  p.textSize(30);
	p.text("SCORE: " + score,p.width/2,35);
	p.text("TIMER: " + p.frameCount, p.width/2,75);

	p.ellipse(buttonX,buttonY,50,50);	
		
	if(distanceToButton <25){ 
		buttonX = p.random(p.width);
		buttonY = p.random(p.height);
		score += 1;
	}
	
	if(p.frameCount>=1000){  
		gameState = "GAMEOVER";
	}
} // end gameOn

function gameOver(){
	p.background(128);
  p.textSize(30);
	p.text("SCORE: " + score,p.width/2,140);
	p.text("GAME OVER",p.width/2,300);
	

} // end game Over



 
    
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
