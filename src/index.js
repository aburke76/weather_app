import "./styles.css";
import { userInput } from "../scripts/data";

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", (e) => {
    userInput();
    e.preventDefault();
});
