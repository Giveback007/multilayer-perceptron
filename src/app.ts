// import "./index.scss";
import { createNeuralNet } from "./neural-net";
import { feedNeuralNet } from "./feed-forward";
import { neuralNetErrors } from "./hidden-errors";
import { findOutputErrors } from "./training";

// In this exercise a 1 should always return a 1
// & a 0 should always return a 0
const inputs = [1];
const nn = createNeuralNet(1, [2, 2, 1]);

const output = feedNeuralNet(nn, inputs);
const target = [1];

const outputErrors = findOutputErrors([output.length - 1], target);
const hiddenErrors = neuralNetErrors(nn, outputErrors);

console.clear();
console.log('// INPUTS //');
console.log(inputs);
console.log('--  --  --  --  --');
console.log('// NEURAL NETWORK //');
nn.forEach((layer, i) => {
    console.log('* LAYER-' + i);
    layer.forEach((node, j) => console.log(`L${i}N${j}`, node))
});
console.log('--  --  --  --  --');
console.log('// OUTPUTS //');
console.log(output);
console.log('FINAL-OUTPUT:', output[output.length - 1]);
console.log('--  --  --  --  --');
console.log('// ERRORS //');
console.log('OUTPUT-ERRORS:', outputErrors)