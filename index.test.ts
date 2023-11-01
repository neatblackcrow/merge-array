import merge from './index';

test('two arrays with same amount of elements', () => {
    expect(merge([0, 15, 48, 63, 99, 100], [0, 12, 20, 25, 37, 88])).toStrictEqual([0, 0, 12, 15, 20, 25, 37, 48, 63, 88, 99, 100]);
});

test('two arrays with different amount of elements - 1', () => {
    expect(merge([0, 15, 48, 63, 99, 100], [12, 20, 37, 88])).toStrictEqual([0, 12, 15, 20, 37, 48, 63, 88, 99, 100]);
});

test('two arrays with different amount of elements - 2', () => {
    expect(merge([15, 48, 99, 100], [0, 12, 20, 37, 88, 89])).toStrictEqual([0, 12, 15, 20, 37, 48, 88, 89, 99, 100]);
});

test('two arrays with one empty - 1', () => {
    expect(merge([], [12, 20, 37, 88])).toStrictEqual([12, 20, 37, 88]);
});

test('two arrays with one empty - 2', () => {
    expect(merge([15, 48, 99, 100], [])).toStrictEqual([15, 48, 99, 100]);
});

test('two empty arrays', () => {
    expect(merge([], [])).toStrictEqual([]);
});

test('two arrays with many duplicates', () => {
    expect(merge([1, 1, 2, 2, 3, 3, 3], [1, 1, 1, 2, 2, 2, 3])).toStrictEqual([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3]);
});