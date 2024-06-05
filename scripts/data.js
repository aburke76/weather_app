import { cOrF } from "./conversions";
import { assignValues } from "./dom";

const input = document.querySelector("input");
const unit = document.querySelector("#temp-change");

async function getData(loc) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=54c8a42645ed487c993193808242905&q=${loc}&aqi=no`
    );
    const data = await response.json();
    console.log(data);

    assignValues(
        data.location.name,
        data.location.region,
        data.current.condition.text,
        data.current.temp_f,
        data.current.humidity,
        data.current.wind_mph,
        data.current.uv
    );
    return data;
}

export function userInput() {
    const city = input.value;
    getData(city);
    input.value = "";
}
