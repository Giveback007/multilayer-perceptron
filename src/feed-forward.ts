const f: activationFunction = (n: reducedInputs) => n;

const feedNode = (node: node, inputs: input[]): output =>
    f( 
        inputs.reduce((sum: output, inp: input, idx) =>
            (inp * node[idx]/* weight */) + sum, node[inputs.length]/* bias */)
    )/* activation function */

const feedLayer = 
    (layer: layer, inputs: input[]): output[] => 
        layer.map((node: node) => feedNode(node, inputs));