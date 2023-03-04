let result = '';

function addToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

function clearResult() {
  result = '';
  document.getElementById('result').value = result;
}

function calculateResult() {
  result = eval(result);
  document.getElementById('result').value = result;
}
