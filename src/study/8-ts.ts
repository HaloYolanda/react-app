/*
 * 
 * 函数
 */

function fn1(x: number, y: number): number {
    return x + y
}

fn1(34, 23)

let fn2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}

fn2(23, 23)

function fn3(x: number, y: number = 1): void {
    console.log(y)
}
function fn4(x: number, y?: number): void { }

fn3(1)

function fn5(...args: any[]) {
    console.log(args)
}

// 函数重载
function fn(x: number, y: number): number;
function fn(x: string, y: string): string;
function fn(x: any, y: any): any {
    return x + y
}