/* tslint:disable */

export const array = (length: number, fill = 0): number[] => Array(length).fill(fill);

export function shiftNeuralNet(neuralNet: neuralNet) {
    const shifted: neuralNet = [];
    // for length of neural net
    for (let i = 0; i < neuralNet.length; i++) {
        if (!shifted[i]) { shifted[i] = []; }
        // for length of layer
        for (let j = 0; j < neuralNet[i].length; j++) {
            if (!shifted[i][j]) { shifted[i][j] = []; }
            // for length of node - 1 for the bias
            for (let k = 0; k < neuralNet[i][j].length - 1; k++) {
                shifted[i][j][k] = neuralNet[i][k][j];
            }
        }
    }

    return shifted;
}

export const nodeErrToLayerErr = (nodeErrors: error[][]) => {
    // [1, 2, 3] + [1, 2, 3] = [2, 4, 6];
    const jLength = nodeErrors[0].length;
    const sums = array(jLength);

    for (let i = 0; i < nodeErrors.length; i++) {
        for (let j = 0; j < jLength; j++) {
            sums[j] += nodeErrors[i][j];
        }
    }

    return sums;
};

type loggerArgs = {
    inputs?: number[];
    neuralNet?: number[][][];
    output?: number[][];
    target?: number[];
    hiddenErrors?: error[][];
    outputErrors?: error[];
};

export function logger({
    inputs, neuralNet, hiddenErrors,
    output, target, outputErrors,
}: loggerArgs) {
    const line = () => console.log("--  --  --  --  --  --  --");
    const title = (name: string | number) => {
        line();
        console.log(`// ${name} //`);
    };

    if (neuralNet) {
        title("NEURAL NETWORK");
        neuralNet.forEach((layer, i) => {
            console.log("* LAYER-" + i);
            layer.forEach((node, j) => console.log(`L${i}N${j}`, node));
        });
    }

    if (output) {
        title("OUTPUTS");

        output.forEach((layer, i) => {
            console.log("* LAYER-" + i);
            layer.forEach((node, j) => console.log(`L${i}N${j}`, node));
        });
    }

    if (hiddenErrors) {
        title("HIDDEN ERRORS");
        hiddenErrors.forEach((layer, i) => {
            console.log("* LAYER-" + i);
            layer.forEach((node, j) => console.log(`L${i}N${j}`, node));
        });
    }

    if (inputs) {
        title("INPUTS");
        console.log(inputs);
    }

    if (output) {
        title("FINAL-OUTPUT");
        console.log(output[output.length - 1]);
    }

    if (outputErrors) {
        title("OUTPUT-ERRORS");
        console.log(outputErrors);
    }

    if (target) {
        // ...
    }

}
