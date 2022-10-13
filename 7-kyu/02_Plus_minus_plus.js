/*
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;

*/

const catchSignChange = (arr) => {
  let count = 0;

  let solution = arr.reduce((acc, curr) => curr + acc);

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      ("");
    } else {
      Math.sign(arr[i]) != Math.sign(arr[i - 1]) ? count++ : "";
    }
  }

  console.log(count);
};

// TO CHECK IF A NUMBER IS POSITIVE OR NEGATIVE:

number < 0; // the most obvious
Math.sign(number) === 1; //return 1 if the number is positive
Math.sign(number) === -1; //return -1 if it's negative
