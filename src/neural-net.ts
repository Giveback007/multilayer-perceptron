export class NeuralNetwork {
    inpNodes: number;
    hidNodes: number;
    outNodes: number;

    constructor(inpNodes: number, hidNodes: number, outNodes: number) {
        this.inpNodes = inpNodes;
        this.hidNodes = hidNodes;
        this.outNodes = outNodes;
    }
}