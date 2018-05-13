export const array = (length: number, fill = 0): number[] => Array(length).fill(fill);

export const add = (a: number, b: number) => a + b;
export const sum = (arr: number[]) => arr.reduce(add);


