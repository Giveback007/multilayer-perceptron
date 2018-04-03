declare module 'p5'  {
    export = p5;
}

type input = number;
type output = number;

type weight = number;
type node = weight[];
type layer = node[];
type neuralNet = layer[];

type activationFunction = (reducedInputs: number) => output;