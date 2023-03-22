import React, { Component } from 'react';
import p5 from 'p5';
import './canvas.css';
class Sketch extends Component {
  componentDidMount() {
    this.canvas = new p5(this.sketch, this.wrapper);
  }


  sketch = (p) => {
    var s;
    var scl= 10; //size of grid: scale
    var food;

    p.setup = () => {

      p.createCanvas(400, 310);
    s = new Snake();
    p.frameRate(10);
    pickLocation();
      
    };
    
    function pickLocation(){
      var cols = Math.floor(p.width/scl);
      var rows = Math.floor(p.height/scl);
      food= p.createVector(Math.floor(p.random(cols)), Math.floor(p.random(rows)));
      food.mult(scl);
  }
    
    p.draw = () => {
      p.background(0);
      s.death();
      s.update();
      s.show();
      if(s.eat(food)) {
          pickLocation();
      }
      p.fill(255, 0, 0);
      p.rect(food.x, food.y, scl, scl);

    };

    p.keyPressed = () => {
      if(p.keyCode === p.UP_ARROW){
          s.dir(0, -1);
      } else if (p.keyCode === p.DOWN_ARROW){
          s.dir(0, 1);
      } else if (p.keyCode === p.RIGHT_ARROW){
          s.dir(1,0);
      } else if (p.keyCode=== p.LEFT_ARROW){
          s.dir(-1,0);
      }
  }
  function Snake(){
    this.x = 0;//position
    this.y = 0; //position
    this.xspeed = 1;//direction
    this.yspeed = 0;//direction
    this.total =0;
    this.tail = [];
    //eat function that will check if snake and food are in same space
    this.eat=function(pos){
        var d = p.dist(this.x, this.y, pos.x, pos.y);
        if(d < 1) {
            this.total++;
            return true;
        } else{
            return false;
        }
    }
    //when snake eats the food, total increases by 1, keeps track of instances where snake eats food
    this.dir =function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    this.death = function() {
        for (var i =0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = p.dist(this.x, this.y, pos.x, pos.y);
            if(d < 1){
                this.total= 0;
                this.tail= [];
            }
        }
    }
    this.update = function(){
        for(var i = 0; i < this.tail.length - 1; i++){
                this.tail[i]= this.tail[i + 1]; 
                //shifts points down, so that new point can be added to end of array
            }
            if (this.total >= 1) {
                 //if snake eats food
                  this.tail[this.total-1] = p.createVector(this.x, this.y);
            }
       
        this.x = this.x +this.xspeed *scl;
        this.y = this.y +this.yspeed *scl;
        //keeps snake inside frame
        this.x = p.constrain(this.x, 0, p.width-scl);
        this.y = p.constrain(this.y, 0, p.height-scl);
    }
    this.show = function(){
      p.fill(0,255,0);
         for(var i = 0; i < this.tail.length; i++){
          p.rect(this.tail[i].x, this.tail[i].y, scl, scl);
            }
        p.rect(this.x, this.y, scl, scl);
    }
}
  };

  render() {
    return (
      <div  ref={(wrapper) => (this.wrapper = wrapper)}>
        {}
      </div>
    );
  }
}

export default Sketch;
