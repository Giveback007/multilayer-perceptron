import React = require("react");
import { connect } from "react-redux";
import { State } from "../store/root.reducer";
import { AppTest, NeuralNetActions } from "../store/actions";
import { Dispatch } from "redux";

const stateToProps = (state: State) => state.nn;

const dispatchToProps = (dispatch: Dispatch<NeuralNetActions>) =>
({
    test: () => dispatch(new AppTest()),
});

type P = ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>;
type S = {};

function NN_Node({ node, n }: { node: node, n: number }) {
    const biasIdx = node.length - 1;
    
    const Weight = ({w, i}: { w: number, i: number}) => (
        <div className={`weight${i === biasIdx ? ' bias' : ''}`}>
            <span className="label">{`${i === biasIdx ? 'bias' : `wg-${i}` } `}</span>
            <span className="content">{(w > 0 ? '+' : '') + w.toFixed(4)}</span>
        </div>
    );

    return (
        <div className="node">
            <div className="node-label">{`Node-${n}`}</div>
            {node.map((w, i) => <Weight key={i} w={w} i={i} />)}
        </div>
    )
}

function Inputs({ inputs } : { inputs: input[] }) {
    const input = (inp: number, n: number) => (
        <div className="arrow_box">
            <span className="label">{`in-${n}: `}</span>
            <span className="content">{inp.toFixed(4)}</span>
        </div>
    )
    return (
        <div className="inputs">
            <h4>input</h4>
            {inputs.map((inp, i) => input(inp, i))}
        </div>
    );
}

function Outputs({ outputs }: { outputs: output[] }) {
    return (
        <div className="outputs">
            <h4>output</h4>
            {outputs.map((out, i) => 
                <div key={i}>
                    <span className="label">{`out-${i}: `}</span>
                    <span className="content">{out.toFixed(4)}</span>
                </div>)}
        </div>
    )
}

class App extends React.Component<P, S> {
    public render() {
        const { neuralNet, input, output, test } = this.props;

        const nn = neuralNet.map((layer, i) => (
            <div key={i} className="layer">
                <h4>{`Layer-${i}`}</h4>
                <div className="layer-inner">
                    <div className="node-wrap">
                    {layer.map((node, j) => <NN_Node key={j} n={j} node={node} />)}
                    </div>
                </div>
            </div>)
        );

        return (
            <div className="app-wrap">
                <div className="controls">
                    <button onClick={test}>Test</button>
                </div>
                <Inputs inputs={input} />
                <div className="neural-net">{nn}</div>
                <Outputs outputs={output} />
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(App);
