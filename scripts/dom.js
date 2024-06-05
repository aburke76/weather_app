const weatherDisplay = document.querySelector("#weather-display");

const city = document.createElement("h2");
const condition = document.createElement("h3");
const temp = document.createElement("h4");
const humidity = document.createElement("h4");
const wind = document.createElement("h4");
const uv = document.createElement("h4");

export function assignValues(loc, cond, tem, hum, w, u) {
    city.textContent = loc;
    condition.textContent = cond;
    temp.textContent = tem;
    //when I try temp.textContent = `${tem} degrees F`, tem is undefined
    humidity.textContent = hum;
    wind.textContent = w;
    uv.textContent = u;

    weatherDisplay.append(city, condition, temp, humidity, wind, uv);
}
