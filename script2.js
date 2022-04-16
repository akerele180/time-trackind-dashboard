function sum(arg) {
  if (arg <= 0) {
    return 0;
  }
  return arg + sum(arg - 1);
}

console.log(sum(5));
