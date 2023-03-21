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
    var timer = 5;

    p.setup = () => {
    p.createCanvas(520, 380);
    p.textAlign(p.CENTER);
} 

p.draw = () => {
  p.background(220);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(26);
  p.text(timer, p.width/2, p.height/2);
  if (p.frameCount % 60 == 0 && timer > 0) 
  { 
    timer --;
  }
  if (timer == 0) {
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
} 


function start(){
  p.textSize(25);


  p.textSize(15);
  p.text("Hover over the circle to increase your score", p.width/2,90);
  p.text("Timer stops at 1000 ", p.width/2,120);
	
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
	p.text("Score: " + score,p.width/2,35);
	p.text("Timer: " + p.frameCount, p.width/2,75);

	p.ellipse(buttonX,buttonY,50,50);	
		
	if(distanceToButton <25){ 
		buttonX = p.random(p.width);
		buttonY = p.random(p.height);
		score += 1;
	}
	
	if(p.frameCount>=1000){  
		gameState = "GAMEOVER";
	}
} 

function gameOver(){
	p.background(82, 235, 138);
  p.textSize(30);
	p.text("Score: " + score,p.width/2,140);
	p.text("Game over click to play again",p.width/2,300);
	
	if(p.mouseIsPressed){
    start();
    
	}
}



 
    
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
