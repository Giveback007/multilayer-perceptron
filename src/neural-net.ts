import { array } from "./utils";


export function createNeuralNet(inputs: number, pattern: number[]) {

    let inp = inputs;
    let neuralNet: neuralNet = [];

    for (let numOfNodes of pattern) {
        const layer: layer = array(numOfNodes)
            .map(() => array(inp + 1).map(() => Math.random() * 2 - 1));

        neuralNet.push(layer);
        inp = numOfNodes;
    }

    return neuralNet;
}
