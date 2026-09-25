function rotate(arr, k) {
  const n = arr.length;

  k = k % n;

  // Reverse entire array
  reverse(arr, 0, n - 1);
  console.log(arr);

  // Reverse first k elements
  reverse(arr, 0, k - 1);
  console.log(arr);

  // Reverse remaining elements
  reverse(arr, k, n - 1);
  console.log(arr);
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}


rotate ([1, 2, 3, 4, 5, 6, 7], 3);