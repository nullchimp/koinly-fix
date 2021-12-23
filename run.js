
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD',
  },
  headers: {
    'X-CMC_PRO_API_KEY': '<CMC KEY>' // Please use your own CMC key here. You may get it from https://pro.coinmarketcap.com/
  },
  json: true,
  gzip: true
};

const getSheeshaPrice = (data) => {
    const sheesha = data.filter(d => d.symbol === "SHEESHA")[0];
    return sheesha.quote.USD.price;
}

rp(requestOptions).then(response => {
    const price = getSheeshaPrice(response.data);
    console.log(`Current SHEESHA Price is: ${price} USD`);
}).catch((err) => {
    console.log('API call error:', err.message);
});