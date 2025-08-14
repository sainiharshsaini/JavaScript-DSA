let n = 5

// 1.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         process.stdout.write("*");

//     }
//     process.stdout.write("\n");
// }

// 2.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write("*");

//     }
//     process.stdout.write("\n");
// }

// 3.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(String(j + 1));
//     }
//     process.stdout.write("\n");
// }

// 4.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(String(i + 1));
//     }
//     process.stdout.write("\n");
// }

// 5.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
// }

// 6.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write(String(j + 1));
//     }
//     process.stdout.write("\n");
// }

// 7.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");
// }

// 8.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < 2 * (n - i) - 1; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < i; j++) {
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");
// }

// 9. (7 + 8)

// 10.
// for (let i = 0; i < 2 * n - 1; i++) {
//     let star = i;
//     if (star > 2 * n - i - 2) {
//         star = 2 * n - i - 2
//     }
//     for (let j = 0; j <= star; j++) {
//         process.stdout.write("*");

//     }
//     process.stdout.write("\n");
// }

// 11.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         if ((i + j) % 2 === 0) {
//             process.stdout.write(String(1));
//         } else {
//             process.stdout.write(String(0));
//         }
//     }
//     process.stdout.write("\n");
// }

// 12.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String(j + 1));
//     }
//     for (let j = 0; j < 2 * (n - i) - 2; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String(i + 1 - j));
//     }
//     process.stdout.write("\n");
// }

// 13.
// let count = 1;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String(count++) + " ");
//     }
//     process.stdout.write("\n");
// }

// 14.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String.fromCharCode(65 + j));
//     }
//     process.stdout.write("\n");
// }

// 15.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write(String.fromCharCode(65 + j));
//     }
//     process.stdout.write("\n");
// }

// 16.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String.fromCharCode(65 + i));
//     }
//     process.stdout.write("\n");
// }

// 17.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     let charCode = 64
//     for (let j = 0; j < 2 * i + 1; j++) {
//         if (j <= (2 * i) / 2) charCode++
//         else charCode--

//         process.stdout.write(String.fromCharCode(charCode));
//     }
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }
//     process.stdout.write("\n");
// }

//18.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write(String.fromCharCode(64 + n - i + j));
//     }
//     process.stdout.write("\n");
// }

// 19.
let iSpace = 0;


// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < iSpace; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < n - i; j++) {
//         process.stdout.write("*");
//     }
//     iSpace += 2;
//     process.stdout.write("\n");
// }
// iSpace = 8
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < iSpace; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < i + 1; j++) {
//         process.stdout.write("*");
//     }
//     iSpace -= 2;
//     process.stdout.write("\n");
// }

// 20.
let Space = 2 * n - 2
// for (let i = 0; i < 2 * n - 1; i++) {
//     let Star = i + 1
//     if (i >= n) {
//         Star = 2 * n - i - 1
//     }
//     for (let j = 0; j < Star; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 0; j < Space; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 0; j < Star; j++) {
//         process.stdout.write("*");
//     }
//     process.stdout.write("\n");
//     if (i >= n - 1) {
//         Space += 2
//     } else {
//         Space -= 2
//     }
// }

// 21.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     process.stdout.write("\n");
// }

// 22.
for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
        let top = i
        let down = j
        let left = 2 * (n - 1) - i
        let right = 2 * (n - 1) - j
        let num = n - Math.min(Math.min(top, down), Math.min(left, right))
        process.stdout.write(String(num));
    }
    process.stdout.write("\n");
}