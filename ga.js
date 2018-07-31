function nextGeneration(){

  //Calculate fitness values
  calculateFitness();
  for(let i = 0; i < TOTAL; i++) {
    birds[i] = pickOne(savedBirds);
  }
  savedBirds = [];
  console.log('Built new Generation');

}
//picking function
function pickOne() {

  var index = 0;
  var r = random(1);

  while(r>0){
    r = r - savedBirds[index].fitness;
    index++;
  }
  index--;

  let bird = savedBirds[index];
  let child = new Bird(bird.brain);
  child.mutate(0.05);
  return child;
}

//derive fitness and return
function calculateFitness() {
  let sum = 0;
  for(let bird of savedBirds) {
    sum+=bird.score;
  }

  for(let bird of savedBirds) {
    bird.fitness = bird.score / sum;
  }
}
