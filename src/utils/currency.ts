export const formatMoneyValue = (value: string) => {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(Number(value))
    .replace(/,\d+/, "");

  return formattedValue;
};
