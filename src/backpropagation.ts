import { findOutputErrors } from './utils';
// errors are calculated by:
// -- take the error number -- //
// const error: number; 
// -- find the error responsibility -- //
// const weightSum = outputWeights.reduce((sum, w) => sum + w);
// const calcError = outputWeights.map((w) => (weightSum / w) * error)

// hidden error with 2 weights
// w11 / (w11 + w22) * err1 
// +
// w21 / (w21 + w22) * err2
// = err for h1

export function backpropagation(neuralNet: neuralNet, outputs: output[], targets: target[]) {
    const outputErrors = findOutputErrors(targets, outputs);
    return outputErrors;
}

const outputs = [0, 2];
const targets = [1, 2];
backpropagation([], outputs, targets) //?