let currentInput = '';
let currentAction = '';
let currentValue = 0;

/* ввод символа по нажатию кнопки */
function numberIn(num) {

  if (currentInput.length >= 10) return;
  if (currentInput == '' && num == '0') return;

  currentInput = currentInput + num;
  showCurrentInput(currentInput);
}

/* отображение текущего значения */
function showCurrentInput(value) {
  document.querySelector('.input-field').innerHTML = value;
}

/** Очистка поля ввода */
function clearIn() {
  currentInput = '';
  currentAction = '';
  currentValue = 0;
  showCurrentInput('0');
}

/** Метод вызова действия */
function doAction(action) {
  currentAction = action;
  currentValue = +currentInput;
  currentInput = '';
}

/** Метод подсчёта */
function calculate() {
  const secondValue = +currentInput;

  if (currentAction == '+') {
    // Сложение
    const result = currentValue + secondValue;
    showCurrentInput(result);
  }

  if (currentAction == '-') {
    // Вычитание
    const result = currentValue - secondValue;
    showCurrentInput(result);
  }

  if (currentAction == '*') {
    // Умножения
    const result = currentValue * secondValue;
    showCurrentInput(result);
  }

  if (currentAction == '/') {
    // Деление
    const result1 = currentValue / secondValue;
    const result = Math.floor(result1 * 10000000000) / 10000000000;
    showCurrentInput(result);
  }
}