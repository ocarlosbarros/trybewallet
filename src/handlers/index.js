const BASE_RADIX = 10;
export function converToInt(number) {
  return Number.parseInt(number, BASE_RADIX);
}

export function roundDecimal(number, fractionPart) {
  return number.toFixed(fractionPart);
}

export function splitString(stringValue) {
  return stringValue.split('/');
}

/**
 * Para realizar a soma corretamente com os dados da cotação consultei o
 * repositório do Neader Menezes.
 *  Link: https://github.com/tryber/sd-015-a-project-trybewallet/pull/101
 */
export function updateValue({ value, exchangeRates, currency }) {
  value = converToInt(value);
  value *= exchangeRates[currency].ask;
  return value;
}
