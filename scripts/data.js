import { assignValues } from "./dom";
// import { activeTempUnit } from "./tempHandler";

const input = document.querySelector("input");

async function getData(loc) {
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=54c8a42645ed487c993193808242905&q=${loc}&aqi=no`
        );
        const data = await response.json();
        console.log(data);
        // const tempUnit = activeTempUnit();
        assignValues(
            data.location.name,
            data.location.region,
            data.current.condition.text,
            data.current.temp_f,
            data.current.humidity,
            data.current.wind_mph,
            data.current.uv
        );
        // if (tempUnit === "f") {
        //     assignValues(
        //         data.location.name,
        //         data.location.region,
        //         data.current.condition.text,
        //         data.current.temp_f,
        //         data.current.humidity,
        //         data.current.wind_mph,
        //         data.current.uv
        //     );
        // } else {
        //     assignValues(
        //         data.location.name,
        //         data.location.region,
        //         data.current.condition.text,
        //         data.current.temp_c,
        //         data.current.humidity,
        //         data.current.wind_kph,
        //         data.current.uv
        //     );
        // }

        return data;
    } catch (error) {
        alert("Please enter valid city or zip code");
    }
}

export function userInput() {
    const city = input.value;
    getData(city);
    input.value = "";
}
