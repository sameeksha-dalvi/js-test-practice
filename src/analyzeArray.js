function analyzeArray(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let average = sum / arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: arr.length,
  };
}

export default analyzeArray;