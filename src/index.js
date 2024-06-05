import "./styles.css";
import { userInput } from "../scripts/data";

const searchBtn = document.querySelector("button");
const tempBtn = document.querySelector("#temp-change");
const btnText = document.querySelectorAll("span");
console.log(btnText.classList);

tempBtn.addEventListener("click", () => {
    btnText.forEach((el) => {
        if (el.classList.value.includes("hidden")) {
            el.classList.toggle("hidden");
        } else {
            el.classList.toggle("hidden");
        }
    });
});

searchBtn.addEventListener("click", (e) => {
    userInput();
    e.preventDefault();
});
