export async function weatherBalloon(city: string, apiKey: string) {
  const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  const res = weather.json()
  const data = await res
  const el = document.getElementById('weather')
  const weatherIcon = data.weather[0].icon;
  const tempK = parseFloat(data.main.temp);
  const tempC = Math.round(tempK - 273.15);
  const tempF = Math.round((tempK - 273.15) * 1.8) + 32;

  if (el) {
    el.innerHTML = '<p id="location">' + data.name + '</p><p id="details" ' + 'title="' + tempF + '&deg;F">' + '<img src="https://openweathermap.org/img/wn/' + weatherIcon + '.png">' + data.weather[0].description + '<span class="separator">|</span>' + tempC + '&deg;C</p>';
  }
}
