export const heading = "currency converter"
export const API_DOMAIN = "https://free.currconv.com/api/v7/convert?q="
export const API_KEY = "e5b6419c6d8fc5692df5&compact=ultra&apiKey="
export const endpointPath = (from, to) =>
    `${API_DOMAIN}${from}_${to}&compact=ultra&apiKey=${API_KEY}`;