import { combineReducers, Middleware } from "redux";
import { neuralNetReducer, NeuralNetState } from "./neural-net.reducer";

export type Effects = Middleware<{}, State>;

export interface State {
    nn: NeuralNetState;
}

export const rootReducer = combineReducers<State>({
    nn: neuralNetReducer,
});
