# NEAT
NEAT algorithm in p5.js

Sketch begins in game.js, contrary to nomenclature.

This is a Neuroevolution algorithm, NEAT (of Augmented Topologies), where optimizations are based on spawns of a single unit, each carrying its own Neural Network.
In this bird game, a random population of birds is spawned, each with random 'brains'.


      for(let i = 0; i<TOTAL;i++){
          birds[i] = new Bird();
      }


The Bird class houses the characteristics of each bird, namely, location, speed, acceleration and brain.

Add and splice pipes in UI:
      
      Pipes.push(new pipe());

Derive fitness of each bird:
      
        for(let bird of savedBirds) {
          sum+=bird.score;
        }

        for(let bird of savedBirds) {
          bird.fitness = bird.score / sum;
        }
        
When all birds die, spawn new 250 of all previous generation winners
        
        calculateFitness();
          for(let i = 0; i < TOTAL; i++) {
            birds[i] = pickOne(savedBirds);
          }
          savedBirds = [];
          console.log('Built new Generation');

This process goes on and on. All mutation/copy logistics is handled by the NN class.
