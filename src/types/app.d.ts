type input = number;
type output = number;

type weight = number;
type bias = number;

/** [w1, w2, w3, b] */
type node = Array<weight | bias>;
type layer = node[];
type neuralNet = layer[];

type target = number;
type error = number;

type ActivationFunction = (sum: number) => output;
type ErrorFunction = (output: output, target: target) => error;

/** gamma */
type learningRate = number;
/** gamma_bias  */
type biasLearningRate = number;
