const BASE_RADIX = 10;
export default function sumExpenses(totalExpenses, currentValue) {
  const convertedvalue = Number.parseInt(currentValue, BASE_RADIX);
  return totalExpenses + convertedvalue;
}
