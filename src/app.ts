// import "./index.scss";
import { createNeuralNet } from "./neural-net";
import { feedNeuralNet } from "./feed-forward";
import { neuralNetErrors } from "./hidden-errors";
import { findOutputErrors } from "./training";
import { logger } from "./utils";

// In this exercise a 1 should always return a 1
// & a 0 should always return a 0
const inputs = [1];
const neuralNet = createNeuralNet(1, [2, 2, 1]);

const output = feedNeuralNet(neuralNet, inputs);
const target = [1];

const outputErrors = findOutputErrors(output[output.length - 1], target);
const hiddenErrors = neuralNetErrors(neuralNet, outputErrors);

logger({
    inputs, 
    neuralNet, 
    output,
    target,
    outputErrors,
    hiddenErrors
});
