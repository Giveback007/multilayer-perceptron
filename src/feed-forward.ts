const ReLU = (n :number) => n < 0 ? 0 : n;
const LReLU = (n: number) => n < 0 ? 0.01 * n : n;
const sigmoid = (n: number) =>  1 / (1 + Math.exp(-n));

const f: activationFunction = LReLU;

// 1. Take an array of inputs (input[])
// 2. Multiply each by a weight (inputs[idx] * node[idx])
// 3. Sum all together + bias (sum + node[lastIdx])
// 4. Put the sum trough an activation function f(sum) => output
const feedNode = (node: node, inputs: input[]): output =>
    f(
        inputs.reduce((sum: number, inp: input, i) =>
            (inp * node[i] /* weight */) + sum, node[inputs.length] /* bias */)
    ) /* activation function */

// 1. Take an array on inputs from the prev layer (input[])
// 2. Feed the input array to each node in the current layer (feedNode(inputs))
// 3. This create the current layer output [ feedNode => output, feedNode => output ]
const feedLayer = 
    (layer: layer, inputs: input[]): output[] => 
        layer.map((node: node) => feedNode(node, inputs));

// 1. Take an array of inputs (input[])
// 2. For each layer take the previous output as an input (layer[idx](layer[idx - 1].out))
// 3. Final layer output is the neural nets output
export const feedNeuralNet =
    (neuralNet: neuralNet, inputs: input[]): output[] =>
        neuralNet.reduce((inps, layer) => feedLayer(layer, inps), inputs);

// with ReLU its possible to 'emit'
// this might be more efficient 
