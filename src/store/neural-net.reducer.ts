import { Reducer } from "redux";
import { createNeuralNet } from "../neural-network/neural-net";
import { NeuralNetActions, APP_TEST } from "./actions";
import { feedNeuralNet } from "../neural-network/feed-forward";
import { findOutputErrors } from "../neural-network/training";
import { neuralNetErrors } from "../neural-network/hidden-errors";

export interface NeuralNetState {
    hiddenErrors: error[][];
    input: input[];
    neuralNet: neuralNet;
    output: output[];
    hiddenOutput: output[][];
    outputErrors: error[];
    target: target[];
}

const initState: NeuralNetState = {
    hiddenErrors: [],
    input: [1],
    neuralNet: createNeuralNet(1, [2, 2, 1]),
    output: [],
    outputErrors: [],
    hiddenOutput: [],
    target: [1],
};

export const neuralNetReducer: Reducer<
    NeuralNetState, NeuralNetActions
> = (state = initState, action: NeuralNetActions) => {
    const { input, neuralNet, target } = state;
    switch (action.type) {
        case APP_TEST:
            const result = feedNeuralNet(neuralNet, input);

            const hiddenOutput = result.slice(0, result.length - 2);
            const output = result[result.length - 1];
            const outputErrors = findOutputErrors(output, target);
            const hiddenErrors = neuralNetErrors(neuralNet, outputErrors);

            return { ...state, output, hiddenOutput, outputErrors, hiddenErrors };
        default:
            return state;
    }
};
