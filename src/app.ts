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

const m1 = new Matrix(3, 2);
const m2 = new Matrix(3, 2);
m1.randomize();
m2.randomize();
console.log("m1");
console.table(m1.vals);

console.log("m2");
console.table(m2.vals);

m1.addMatrix(m2);
console.table(m1.vals);
