import { createNeuralNet } from "./neural-net";
import { feedNeuralNet } from "./feed-forward";

const inputs = [Math.random(), Math.random()];
const nn = createNeuralNet(2, [2, 2, 2]);
const output = feedNeuralNet(nn, inputs); // ?
