const validation = (
  result,
  setErrorInput,
  setInputErrorText,
  setCurrencyData
) => {
  if (result.length === 0) {
    setErrorInput(true);
    setInputErrorText("Строка не должна быть пустой");
  } else if (result.length !== 4) {
    setErrorInput(true);
    setInputErrorText("Строка должна содержать 4 значения");
  } else if (!!!+result[0]) {
    setErrorInput(true);
    setInputErrorText("Первое значение должно быть числовым");
  } else if (result[1].length !== 3 || result[3].length !== 3) {
    setErrorInput(true);
    setInputErrorText("Название валюты обозначается тремя буквами");
  } else if (/[0-9]/.test(result[1]) || /[0-9]/.test(result[3])) {
    setErrorInput(true);
    setInputErrorText("Название валюты должно содержать только буквы");
  } else {
    setErrorInput(false);
    setInputErrorText("Поле заполнено успешно");
    setCurrencyData({
      value: +result[0],
      current: result[1].toUpperCase(),
      exchange: result[3].toUpperCase(),
    });
  }
};

export default validation;
