import React, { Component } from 'react';
import p5 from 'p5';
import './index.css';
class Sketch extends Component {
  
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }

 
  sketch = (p) => {
    let screen = 0;
    let y=-20;
    let x=200;
    let speed = 2;
    let score= 0;
    let timer = 5;

    p.setup = () => {
       p.createCanvas(520, 380);
  
    };
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
        if(screen == 0){
          startScreen()
        }else if(screen == 1){
          gameOn()
        }else if(screen==2){
          endScreen()
        }	
      }

    };

function startScreen(){
  p.background(82, 235, 138)
  p.fill(255)
  p.textAlign(p.CENTER);
  p.textSize(26);
  p.text('Catch the balls to add to your score!', p.width / 2, p.height / 2)
  p.text('Click to start!', p.width / 2, p.height / 2 + 40);
  reset();
}

function gameOn(){
p.background(82, 235, 138)
p.text("Score = " + score, 80,30)
p.ellipse(x,y,20,20)
p.rectMode(p.CENTER)
p.rect(p.mouseX,p.height-10,60,30)
y+= speed;
if(y>p.height){
  screen =2
 }
if(y>p.height-10 && x>p.mouseX-20 && x<p.mouseX+20){
  y=-20
  speed+=.5
  score+= 1
}
if(y==-20){
  pickRandom();
}
}

function pickRandom(){
x= p.random(20,p.width-20)
}

function endScreen(){
  p.background(82, 235, 138)
  p.textAlign(p.CENTER);
  p.text("Game Over! Score = " + score, p.width / 2, p.height / 2)
  p.text('Click to play again!', p.width / 2, p.height / 2 + 40);
}
p.mousePressed = () => {
if(screen==0){
  screen=1
}else if(screen==2){
  screen=0
}
}

function reset(){
  score=0;
  speed=2;
  y=-20;
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
