export const heading = "currency converter";
export const API_DOMAIN = "https://api.apilayer.com/fixer/convert?to=";
export const API_KEY = "USE-YOUR-API-KEY";
export const endpointPath = (from, to, amount) =>
  `${API_DOMAIN}${to}&from=${from}&amount=${amount}`;
