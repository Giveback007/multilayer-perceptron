type callBack = (val: number, idx?: number) => number;
interface MatrixArgs { rows?: number, cols?: number, fromArray?: number[][] }

export class Matrix {
    rows: number;
    cols: number;
    vals: number[][];

    constructor({rows, cols, fromArray}: MatrixArgs = {rows: 2, cols: 1}) {
        if (fromArray) {
            this.vals = fromArray.map((row) => [...row]);
        } else {
            this.vals = Array(rows).fill(null).map(() => Array(cols).fill(0));
        }

        this.rows = this.vals.length;
        this.cols = this.vals[0].length;
    }

    // immutable
    addMatrix = (m: Matrix) =>
        this.vals = this.vals.map((row, rowIdx) =>
            row.map((val, colIdx) => val + m.vals[rowIdx][colIdx]))

    // for every row
    forEveryRow = (funct: callBack) => this.vals = this.vals.map((row) => row.map(funct));

    multiply = (n: number) => this.forEveryRow((val) => val * n);
    add = (n: number) => this.forEveryRow((val) => val + n);

    randomize = () => this.forEveryRow(() => Math.floor(Math.random() * 10));

    transpose = () => {
        const arr: number[][] = Array(this.cols).fill(null).map(() => []);

        this.vals.forEach((row) => row.forEach((n, i) => arr[i].push(n)));

        return this.vals = arr;
    }
}

export function dotProduct(mtrX: Matrix, mtrY: Matrix) {
    if (mtrX.rows !== mtrY.cols || mtrX.cols !== mtrY.rows) {
        throw "check number of rows and cols on each matrix";
    }
    
    const matrix = new Matrix({rows: mtrX.rows, cols: mtrY.cols});

    const arr = matrix.vals.map((r, row) => r.map((c, col) =>
        mtrX.vals[row].reduce((sum, x, xIdx) => x * mtrY.vals[xIdx][col] + sum, 0))
    );

    return new Matrix({fromArray: arr});
}