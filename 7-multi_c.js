const arg = Number(process.argv[2]);

if (isNaN(arg) || process.argv.length < 3) {
  console.log('Missing number of occurrences');
} else if (arg > 0) {
  let i = 0;
  while (i < arg) {
    console.log('C is fun');
    i++;
  }
}