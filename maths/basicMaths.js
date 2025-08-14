
function countDigits(n) {
    let cnt = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        cnt++
    }
    return cnt
}

function reverseDigits(n) {
    let revNum = 0;
    let lastDigit;
    while (n != 0) {
        lastDigit = n % 10
        n = Math.floor(n / 10)
        revNum = (revNum * 10) + lastDigit
    }
    return revNum
}

function checkPalindrome(n) {
    // if (reverseDigits(n) === n) return true
    // else return false
    let arr = String(n).split('')
    let left = 0;
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

function checkArmstrong(n) {
    let len = String(n).length
    let sum = 0
    let dup = n
    let digit;

    while (n > 0) {
        digit = n % 10
        sum += Math.pow(digit, len)
        n = Math.floor(n / 10)
    }

    return sum === dup ? true : false
}

function findAllDivisors(n) {
    let div = 0;
    let arr = []
    while (div <= n) {
        if (n % div === 0) {
            arr.push(div)
        }
        div++
    }
    return arr
}

function checkPrime(n) {
    for (let i = 0; i < n; i++) {
        if (n%i === 0) {
            
        }
    }
}

function main() {
    let n = 36
    process.stdout.write("No. of digit in n: " + String(countDigits(n)))
    process.stdout.write("\nReverse No. of n: " + String(reverseDigits(n)))
    process.stdout.write("\nNo. is palindrome: " + String(checkPalindrome(n)))
    process.stdout.write("\nNo. is armstrong: " + String(checkArmstrong(n)))
    process.stdout.write("\nAll divisors of n: " + String(findAllDivisors(n)))
    process.stdout.write("\nNo. is prime: " + String(checkPrime(n)))
}

main()