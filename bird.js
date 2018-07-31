function Bird(brain){
  this.x = 64;
  this.y = height/2;
  this.velocity = 0;
  this.gravity = 0.7;
  this.lift = -12;
  this.score = 0;
  this.fitness = 0;

  if(brain){
    this.brain = brain.copy();
  }else{
    this.brain = new NeuralNetwork(4, 6, 2);
  }
  this.mutate = function(val) {
    return this.brain.mutate(val);
  }


  this.show = function(){
    fill(255,200,70,150);
    stroke(255);
    ellipse(this.x, this.y, 32, 32);
  }
  this.think = function(Pipes){
    let inputs = [];

    let closest = null;
    let closestD = Infinity;
    //for all Pipes
    for ( let i = 0; i < Pipes.length; i++){
      let d = Pipes[i].x - this.x;
      if(d < closestD && d>0){
        closestD = d;
        closest = Pipes[i];
      }
    }
    inputs[0] = closest.x / width;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = this.y / height;

    let decision = this.brain.predict(inputs);
  //  console.log(decision);
    if(decision[0] > decision[1]){
      this.up();
    }
  }
  this.update = function() {
    //score if you make it through
    this.score++;
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y>height){
      this.y = height;
      this.velocity = 0;
    }
    if(this.y<0){
      this.y = 0;
      this.velocity = 0;
    }
  }

  this.up = function(){
    this.velocity += this.lift;
  }
}
