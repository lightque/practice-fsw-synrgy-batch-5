/*
Diberikan sebuah angka n, jumlahkanlah masing-masing digit pada angka tersebut.
*/

function solution(calculate) {
    result = calculate
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);
        
    return result;
}

console.log(solution(1001));