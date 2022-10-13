/*

* * * TASK * * * 
Given a Divisor and a Bound, Find the largest integer N: 

Conditions :
- N is divisible by divisor
- N is less than or equal to bound
- N is greater than 0.

Input >> Output Examples
maxMultiple (2,7) ==> return (6)
Explanation:
(6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

*/

function maxMultiple(divisor, bound) {
  let multipleArray = [];
  for (i = 0; i <= bound; i++) {
    i % divisor == 0 && i > 0 ? multipleArray.push(i) : "";
  }

  console.log(multipleArray[multipleArray.length - 1]);
}

maxMultiple(3, 80);
