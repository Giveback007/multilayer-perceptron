import { array, nodeErrToLayerErr } from "./utils";

// 1. Take the error for the given node
// 2. Multiply each weight by the error
// 3. Exclude the bias from the outcome
const findNodeErrors = (node: node, error: error): error[] => {
    const errors = node.map((w) => w * error);
    errors.pop(); // remove the bias
    return errors;
}

// 1. Take the errors for the given layer
// 2. Find each nodes errors with findNodeErrors(layer[i], errors[i])
// 3. The results need to be summed in to a single array, sums[j] += preSums[i][j];
const findLayerErrors = (layer: layer, errors: error[]): error[] => {
    const nodeErrors = layer.map((node: node, i) => findNodeErrors(node, errors[i]));
    return nodeErrToLayerErr(nodeErrors);
}

export const neuralNetErrors = (neuralNet: neuralNet, outputErrors: error[]): error[][] => {
    let errors: error[][] = [];
    
    for (let i = neuralNet.length - 1; i >= 0; i--) {
        const layer = neuralNet[i];
        const layerErrors = errors[i + 1] || outputErrors;

        errors[i] = findLayerErrors(layer, layerErrors);
    }

    return errors;
}
