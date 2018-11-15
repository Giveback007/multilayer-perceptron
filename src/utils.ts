export const array = (length: number, fill = 0): number[] => Array(length).fill(fill);

export function shiftNeuralNet(neuralNet: neuralNet) {
    const shifted: neuralNet = [];
    // for length of neural net
    for (let i = 0; i < neuralNet.length; i++) {
        if (!shifted[i]) shifted[i] = [];
        // for length of layer
        for (let j = 0; j < neuralNet[i].length; j++) {
            if (!shifted[i][j]) shifted[i][j] = [];
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
}
