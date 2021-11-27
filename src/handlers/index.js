import fetchCurrencies from '../services/index';

const BASE_RADIX = 10;
export function sumExpenses(totalExpenses, currentValue) {
  const convertedToInt = currentValue ? Number.parseInt(currentValue, BASE_RADIX) : 0;
  totalExpenses += convertedToInt;
  return totalExpenses;
}

export function roundDecimal(number, fractionPart) {
  return number.toFixed(fractionPart);
}

export function currencyConverter({ value, currency }) {
  fetchCurrencies((currencies) => {
    value *= currencies[currency].ask;
    console.log(roundDecimal(value, 2));
  });
}
