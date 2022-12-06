function sumStrings(a,b) {
  // a = a !== "" ? parseInt(a, 10) : 0;
  // b = b !== "" ? parseInt(b, 10) : 0;
  return ((BigInt(a) + BigInt(b)).toString());
}

sumStrings('123','456');
sumStrings('712569312664357328695151392', '8100824045303269669937');

// BigInt documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// I use BigInt because the values are bigger than the int type max value.
