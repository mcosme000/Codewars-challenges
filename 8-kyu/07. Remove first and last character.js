function removeChar(str) {
  str = str.trim().split("");
  str.pop();
  str.shift();
  return str.join("");
}

// OTRA SOLUCIÓN:

function removeChar(str) {
  return str.slice(1, -1);
}
