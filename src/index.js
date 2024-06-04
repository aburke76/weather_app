import "./styles.css";
import { userInput } from "../scripts/getData";

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", (e) => {
    userInput();
    e.preventDefault();
});
