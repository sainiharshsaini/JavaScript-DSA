function PrintName(i, n) {
    if (i > n) {
        return
    }
    process.stdout.write("Harsh\n");
    PrintName(i + 1, n)
}

let i = 1;
function Print1ToN(i, n) {
    if (i > n) {
        return
    }
    process.stdout.write(String(i) + "\n");
    Print1ToN(i + 1, n);
}

function SumOfN(n, sum) {
    if (n < 1) {
        process.stdout.write(String(sum));
        return
    }
    SumOfN(n - 1, sum + n)
}

function SumOfN2(n) {
    if (n == 0) {
        return 0
    }
    return n + SumOfN2(n - 1)
}

function factorial(n) {
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1);
}

function reverseArray(arr, start, end) {
    if (start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        reverseArray(arr, start + 1, end - 1)
    }
    return arr
}

function checkPalindromeStr(str, i, n) {
    if (i >= n / 2) {
        return true
    }

    if (str[i] !== str[n - 1]) {
        return false
    }

    return checkPalindromeStr(str, i + 1, n - 1)
}

function fibonacciSeries(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let last = fibonacciSeries(n - 1);
    let secondLast = fibonacciSeries(n - 2);

    return last + secondLast;
}

function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write(String(fibonacciSeries(i)) + "\n")
    }
}

// PrintName(1, 5)
// Print1ToN(i, 5)
// SumOfN(5, 0)
// process.stdout.write(String(SumOfN2(5)));
// process.stdout.write(String(factorial(4)));

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// process.stdout.write(String(reverseArray(arr, 0, arr.length - 1)))

let str = "naman"
// process.stdout.write(String(checkPalindromeStr(str, 0, str.length)));

printFibonacci(5)