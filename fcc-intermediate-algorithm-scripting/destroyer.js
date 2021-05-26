let destroyer = (arr, ...args) =>
  arr
    .filter(item => args
      .includes(item) === false);

let arr = destroyer([1, 2, 3, 1, 2, 3], 2, 3);