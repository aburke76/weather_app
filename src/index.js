import "./styles.css";
import { userInput } from "../scripts/data";
// import { switchTempUnit } from "../scripts/tempHandler";

const searchBtn = document.querySelector("button");
// const tempBtn = document.querySelector(".temp-btn");
// const btnText = document.querySelectorAll("span");

// switchTempUnit();

searchBtn.addEventListener("click", (e) => {
    userInput();
    e.preventDefault();
});
