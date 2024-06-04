const input = document.querySelector("input");

async function getData(local) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=54c8a42645ed487c993193808242905&q=${local}&aqi=no`
    );
    const data = await response.json();
    console.log(data);
    return data;
}

export function userInput() {
    const city = input.value;
    getData(city);
    input.value = "";
}
