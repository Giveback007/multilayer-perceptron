import { createNeuralNet } from "./neural-net";
import { feedNeuralNet } from "./feed-forward";

const absolute = (output: output, target: target) => output - target;
const square = (output: output, target: target) => (output - target) ** 2 / 2;

const errorFunction: ErrorFunction = square;

// * teacher * - scores the output of the NN to the target
export function findOutputErrors(outputs: output[], targets: target[]): error[] {
    return targets.map((t, i) => errorFunction(outputs[i], t));
}

/* For Personal Learning */
// Look up the mathematical notation and all the terms being used
// map them to the functions and create some graphic to show what 
// the NN is doing. 
/* For Personal Learning */


/* Experiment */
// what if you can map the errors back over the notwork
// using activation functions back and forth util the
// error on both sides is as close to 0 as possible
// effectively modeling the world forwards and backwards

// 1. Get it working the standard way
// 2. Run the activation backwards to see if it gets the same #s as the input
// 3. Experiment with pushing the #s back and forth until the model errors are close to 0
/* Experiment */