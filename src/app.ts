import * as p5 from "p5";
import "./index.scss";
import { NeuralNetwork } from "./neural-net";
import { Matrix } from "./matrix";

// tslint:disable-next-line:no-unused-expression
new p5((p: p5) => {
    const brain = new NeuralNetwork(3, 3, 1);

    p.setup = () => {

    }

    p.draw = () => {

    }
});
