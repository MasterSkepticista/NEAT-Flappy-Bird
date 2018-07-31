const TOTAL = 250;
let birds = [];
let savedBirds = [];
let Pipes = [];
let counter = 0;
let slider;
//spawn population
function setup(){
  createCanvas(640, 480);
  for(let i = 0; i<TOTAL;i++){
    birds[i] = new Bird();
  }
  //for speed
  slider = createSlider(1, 200, 1);
}

function draw(){

  cycles = slider.value();
  for(let c = 0;c<cycles;c++){

    //game UI: push pipes continually
    if(counter%75 == 0)
      Pipes.push(new pipe());

      //what if hit?
    for(let i = Pipes.length-1; i>=0;i--){
        for (let j = birds.length-1; j>=0;j--){
          if(Pipes[i].hit(birds[j])){
            savedBirds.push(birds.splice(j, 1)[0]);
          }
        }
      Pipes[i].update();
      if(Pipes[i].offscreen()){
        Pipes.splice(i, 1);
      }
    }
    //let the birds evolve
    for(let bird of birds){
      bird.think(Pipes);
      bird.update();
    }
    if(birds.length == 0){
      nextGeneration();
      counter = 0;
      Pipes = [];
      Pipes.push(new pipe());

    }

    counter++;
  }
  background(0);
//display
  for(let bird of birds){
    bird.show();

  }
  for(let pipe of Pipes){
    pipe.show();
  }


}

// function keyPressed(){
//   if(key == ' '){
//     birds.up();
//   }
// }
