export const database = {
  brand: 'BMW',
  mileage: 250000,
  regNumber: 'KR241RC',
  calculation: priceNetto =>
    priceNetto > 100000
      ? 'price is higher than 100000'
      : 'price is LOWER than 100000'
};
