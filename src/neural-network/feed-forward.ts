const activationFunctions: { [key: string]: ActivationFunction } = {
    LReLU: (n: number) => n < 0 ? 0.01 * n : n,
    ReLU: (n: number) => n < 0 ? 0 : n,
    sigmoid: (n: number) =>  1 / (1 + Math.exp(-n)),
};

// 1. Take an array of inputs (input[])
// 2. Multiply each by the corresponding weight (inputs[idx] * node[idx])
// 3. Sum all together + bias (sum + node[lastIdx])
// 4. Put the sum trough an activation function f(sum) => output
const feedNode = (node: node, inputs: input[]): output =>
    activationFunctions.LReLU(
        // `inputs.reduce` because `node.length === (input.length + 1)` due to bias
        inputs.reduce((sum: number, input: input, i) =>
            (input * (node[i] as weight)) + sum, node[node.length - 1] as bias),
    );

// 1. Take an array on inputs from the prev layer (input[])
// 2. Feed the input array to each node in the current layer (feedNode(inputs))
// 3. This create the current layer output [ feedNode => output, feedNode => output ]
const feedLayer =
    (layer: layer, inputs: input[]): output[] =>
        layer.map((node: node) => feedNode(node, inputs));

// 1. Take an array of inputs (input[])
// 2. For each layer take the previous output as an input (layerInput[idx] = layer[idx - 1] 'output')
// 3. Return each layers output, output[output.length - 1] is the neural nets final output
export function feedNeuralNet(neuralNet: neuralNet, inputs: input[]): output[][] {
    const outputs: output[][] = [];

    for (let i = 0; i < neuralNet.length; i++) {
        const layer = neuralNet[i];
        const layerInputs = outputs[i - 1] || inputs;

        outputs[i] = feedLayer(layer, layerInputs);
    }

    return outputs;
}
