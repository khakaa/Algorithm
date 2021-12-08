function printStar(n, m) {
  var star = " ";
  for (var j = 0; j < m; j++) {
    for (var i = 0; i < n; i++) {
      star += "*";
    }
    if (j < m - 1) star += "\n";
  }
  return star;
}

console.log(printStar(10, 6));
