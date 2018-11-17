import { array } from "./utils";

export function createNeuralNet(inputs: number, pattern: number[]) {

    const neuralNet: neuralNet = [];
    let inp = inputs;

    for (const numOfNodes of pattern) {
        const layer: layer = array(numOfNodes)
            .map(() => array(inp + 1).map(() => Math.random() * 2 - 1));

        neuralNet.push(layer);
        inp = numOfNodes;
    }

    return neuralNet;
}
