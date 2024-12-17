function balancedParentheses(n, arr) {
  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    let stack = [];

    for (let j = i; j < n; j++) {
      if (arr[j] > 0) {
        stack.push(arr[j]);
      } else {
        if (stack.length > 0 && stack[stack.length - 1] === -arr[j]) {
          stack.pop();
          if (stack.length === 0) {
            maxLen = Math.max(maxLen, j - i + 1);
          }
        } else {
          break;
        }
      }
    }
  }

  return maxLen;
}

const n = 7;
const arr = [1, 2, -2, -1, 3, 4, -3];
console.log(balancedParentheses(n, arr));
