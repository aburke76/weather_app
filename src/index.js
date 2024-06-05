import "./styles.css";
import { userInput } from "../scripts/data";

const searchBtn = document.querySelector("button");
const tempBtn = document.querySelector("#temp-change");
const btnText = document.querySelectorAll("span");

searchBtn.addEventListener("click", (e) => {
    userInput();
    e.preventDefault();
});

tempBtn.addEventListener("click", () => {
    btnText.forEach((el) => {
        if (el.classList.value.includes("hidden")) {
            el.classList.toggle("hidden");
        } else {
            el.classList.toggle("hidden");
        }
    });
});
