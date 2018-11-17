import React = require("react");
import ReactDOM = require("react-dom");
import { Provider } from "react-redux";
import App from "./components/app.component";
import { feedNeuralNet } from "./neural-network/feed-forward";
import { neuralNetErrors } from "./neural-network/hidden-errors";
import { createNeuralNet } from "./neural-network/neural-net";
import { findOutputErrors } from "./neural-network/training";
import { logger } from "./neural-network/utils";
import { store } from "./store/store";

import "./index.scss";

// In this exercise a 1 should always return a 1
// & a 0 should always return a 0
const inputs = [1];
const neuralNet = createNeuralNet(1, [2, 2, 1]);

const output = feedNeuralNet(neuralNet, inputs);
const target = [1];

const outputErrors = findOutputErrors(output[output.length - 1], target);
const hiddenErrors = neuralNetErrors(neuralNet, outputErrors);

logger({
    hiddenErrors,
    inputs,
    neuralNet,
    output,
    outputErrors,
    target,
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app-root"),
);
