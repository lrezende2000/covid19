const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country) {
  return fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
}


function getAllCountriesName() {
  return fetch(path, headers)
    .then((response) => response.json())
    .then((data) => {
      const countryNames = []
      data.filter(i => countryNames.push(i.country))
      return countryNames;
    })
}

export default {
  getCountry,
  getAllCountriesName
}