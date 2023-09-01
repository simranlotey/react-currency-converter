export const heading: string = "currency converter";
export const API_DOMAIN: string = "https://api.apilayer.com/fixer/convert?to=";
export const API_KEY: string = "D04rYMknELftvvkPZoC3byCArdtYagFk";
export const endpointPath = (from: string, to: string, amount: number): string =>
  `${API_DOMAIN}${to}&from=${from}&amount=${amount}`;
