

const url = 'http://api.worldbank.org/countries/it/indicators/NY.GDP.MKTP.CD?format=json&per_page=500&date=1975:2015'

  // fetch(url).then(response => response.json()).then(data=>console.log(data));

  axios.get(url).then(response => console.log(response));