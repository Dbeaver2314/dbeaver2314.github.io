function filterNumbersFromArray(arr) {
  nums = arr.filter(Number);
  arr.sort();
  console.log(nums.length);
  arr = arr.slice(nums.length);
}

var arr = [1, "a", "b", 2, "@"];
filterNumbersFromArray(arr);
