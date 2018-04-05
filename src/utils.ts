export const array = (length: number, fill = 0): number[] => Array(length).fill(fill);

export const findOutputErrors = 
    (targets: target[], outputs: output[]): error[] => targets.map((t, idx) => t - outputs[idx]);

export function findHiddenErrors(layer: layer, err: error[]): error[] {
    // each node has a sum of its weights
    const wgSums = layer.map((node) => node.reduce((sum, wg) => sum + wg));

    // each weight has a proportional error
    const layerErrs = layer.map((node, idx) => 
        node.map((wg) => wg / wgSums[idx] * err[idx]));

    // add the nodes by columns
    const errors: error[] = array(layerErrs[0].length);
    for (let col = 0; col < layer[0].length; col++) {
        layerErrs.forEach((nodeErrs) => errors[col] += nodeErrs[col])
    }

    return errors;
}
