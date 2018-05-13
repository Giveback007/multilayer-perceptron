// errors are calculated by:
// -- take the error number -- //
// const error: number; 
// -- find the error responsibility -- //

// hidden error with 2 weights
// w11 / (w11 + w22) * err1 
// +
// w21 / (w21 + w22) * err2
// = err for h1

// error function
export const err = (trg: target, out: output): error => ((trg - out) ** 2) / 2;

// w * wSum => % err responsibility -- % * err => wErr
export const hiddenErr = (w: weight, wSum: number, err: error): error => w / wSum * err;

export const errLayer = 
    (targets: target[], outputs: output[]): error[] => 
        targets.map((trg, i) => err(trg, outputs[i]));

export function hiddenErrLayer(layer: layer, errors: error[]): error[] {
    // each error has a sum of weights going in to it
    const wSums = errors.map((err, i) => 
        layer.reduce((sum, node) => sum + node[i], 0));

    // hiddenE[i] = node/h => (w[j]h[i] / wSumErr[j] * err[j])[] get sum
    // layer.map => (node/w[]) => 
    //      sum( w[].map => f(w) /* wErr[] */ ) => nodeErr[]
    return layer.map((node) => 
        node.reduce((sum, w, i) => hiddenErr(w, wSums[i], errors[i]) + sum, 0));
}

// export function hiddenErrNet(neuralNet: neuralNet, ) {
    
// }

// export function backpropagation(neuralNet: neuralNet, outputs: output[], targets: target[]) {
//     const outputErrors = errLayer(targets, outputs);
//     return outputErrors;
// }

// const outputs = [0, 2];
// const targets = [1, 2];
// backpropagation([], outputs, targets) // ?