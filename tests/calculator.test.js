import {calculator} from "../src/calculator";

test('adds two numbers test', () =>{
    expect(calculator.add(1,1)).toBe(2);
});

test('subtracts two numbers test', () =>{
    expect(calculator.subtract(1,1)).toBe(0);
});

test('multiplies two numbers test', () =>{
    expect(calculator.multiply(2,5)).toBe(10);
});

test('divides two numbers test', () =>{
    expect(calculator.divide(6,2)).toBe(3);
});