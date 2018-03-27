type callBack = (val: number, idx?: number) => number;

export class Matrix {
    rows: number;
    cols: number;
    vals: number[][];

    constructor(rows: number, cols: number) {
        this.vals = Array(rows).fill(null).map(() => Array(cols).fill(0));
    }

    // immutable
    addMatrix = (m: Matrix) =>
        this.vals = this.vals.map((row, rowIdx) =>
            row.map((val, colIdx) => val + m.vals[rowIdx][colIdx]))

    apply = (funct: callBack) => this.vals = this.vals.map((row) => row.map(funct));

    // scalar
    multiply = (n: number) => this.apply((val) => val * n);
    add = (n: number) => this.apply((val) => val + n);

    randomize = () => this.apply(() => Math.floor(Math.random() * 10));
}
