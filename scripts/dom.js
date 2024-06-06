import { activeTempUnit, cToF, fToC } from "./tempHandler";

const weatherDisplay = document.querySelector("#weather-display");
const body = document.querySelector("body");

const city = document.createElement("h2");
const condition = document.createElement("h3");
const temp = document.createElement("h1");
temp.setAttribute("id", temp);
const humidity = document.createElement("h4");
const wind = document.createElement("h4");
const uv = document.createElement("h4");

export function assignValues(loc, reg, cond, tem, hum, w, u) {
    // const tempUnit = activeTempUnit();
    city.textContent = `${loc}, ${reg}`;
    temp.textContent = `${tem}\u00B0F`;
    // if (tempUnit === "f") {
    //     temp.textContent = `${tem}\u00B0F`;
    // } else {
    //     temp.textContent = `${tem}\u00B0C`;
    // }
    condition.textContent = cond;
    humidity.textContent = `${hum}% Humidity`;
    wind.textContent = `Wind Speed: ${w}mph`;
    // if (tempUnit === "f") {
    //     wind.textContent = `Wind Speed: ${w}mph`;
    // } else {
    //     wind.textContent = `Wind Speed: ${w}kph`;
    // }

    uv.textContent = `UV Index: ${u}`;
    weatherDisplay.append(city, temp, condition, humidity, wind, uv);
    updateBackground();
}

function updateBackground() {
    const cond = condition.textContent;
    switch (cond) {
        case "Partly cloudy":
            body.style.backgroundImage =
                "url(https://images.unsplash.com/photo-1597621864521-93dfdb10c6b1?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
            break;
        case "Overcast":
        case "Cloudy":
            body.style.backgroundImage =
                "url(https://images.unsplash.com/photo-1499956827185-0d63ee78a910?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
            break;
        case "Sunny":
            body.style.backgroundImage =
                "url(https://images.unsplash.com/photo-1622278647429-71bc97e904e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
            break;
        case "Heavy rain":
        case "Rain":
        case "Mist":
            body.style.backgroundImage =
                "url(https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
            break;
    }
}

export function changeTempDisplay(t) {
    if (activeTempUnit == "c") {
        const c = fToC(t);
        temp.textContent = c;
    } else {
        const f = cToF(t);
        temp.textContent = f;
    }
}
