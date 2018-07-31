let brain;
function setup(){

	noCanvas();
	brain = new NeuralNetwork(2, 4, 1);
	console.log(brain);
	//copy the DNA of brain, all weight matrices and parameters
	let child = brain.copy();
	child.mutate(0.5);
	console.log(child);
}
