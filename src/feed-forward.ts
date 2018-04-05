const ReLU = (n :number) => n < 0 ? 0 : n;
const LReLU = (n: number) => n < 0 ? 0.01 * n : n;
const sigmoid = (n: number) =>  1 / (1 + Math.exp(-n));

const f: activationFunction = LReLU;

const feedNode = (node: node, inputs: input[]): output =>
    f(
        inputs.reduce((sum: output, inp: input, idx) =>
            (inp * node[idx] /* weight */) + sum, node[inputs.length] /* bias */)
    ) /* activation function */

const feedLayer = (layer: layer, inputs: input[]): output[] => 
        layer.map((node: node) => feedNode(node, inputs));

export function feedNeuralNet(neuralNet: neuralNet, inputs: input[]): output[] {
    let output = inputs;

    for (let layer of neuralNet) {
        output = feedLayer(layer, output);
    }

    return output;
}

// with ReLU its possible to 'emit'
// this might be more efficient 
