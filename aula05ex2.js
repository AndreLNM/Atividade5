//André Luiz Nascimento Martinho 22/09/2023

const arrayPrint = [
  [5, 10, 12],
  [2, 9, 11],
  [15, 8, 6]
];

arrayPrint.forEach(subarray => {
  subarray.forEach(value => {
    if (value > 10) {
      console.log(value);
    }
  });
});
