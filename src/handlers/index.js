export default function incrementId(expense) {
  const INCREMENT = 1;
  let { id } = expense;
  id += INCREMENT;
  return {
    ...expense,
    id,
  };
}
