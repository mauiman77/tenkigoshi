import layout from './modules/makeLayout';
import weather from './modules/weatherApi';

layout.initPage();

async function testApi() {
  const newCity = await weather.getLocation('New York');
  const newCityWeather = await weather.getLocationWeather('New York');

  const timeBit = document.querySelector('.location .time');
  timeBit.textContent = `${newCity.time}`;

  const countryBit = document.querySelector('.location .country');
  countryBit.textContent = `${newCity.country}`;

  const cityBit = document.querySelector('.location .city');
  cityBit.textContent = `${newCity.cityName}`;

  const conditionBit = document.querySelector('.condition');
  conditionBit.textContent = `${newCityWeather.weatherCondition}`;

  const farTempBit = document.querySelector('.far');
  farTempBit.textContent = `${newCityWeather.tempFar}`;
  layout.addDegree(farTempBit, 'F');

  const celBitTemp = document.querySelector('.cel');
  celBitTemp.textContent = `${newCityWeather.tempCel}`;
  layout.addDegree(celBitTemp, 'C');

  const body = document.querySelector('body');
  console.log(body);
  body.style.cssText += `background-image: ${layout.setBackground(newCityWeather.tempCel)}`;
}

testApi();
