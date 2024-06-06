import { changeTempDisplay } from "./dom";

const tempBtns = document.querySelectorAll(".temp-btn");
const temp = document.querySelector("#temp");

export function cToF(c) {
    return (c * 9) / 5 + 32;
}
export function fToC(f) {
    return ((f - 32) * 5) / 9;
}

export function switchTempUnit() {
    tempBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            tempBtns.forEach((btn) => {
                btn.classList.remove("active");
            });
            if (!btn.classList.contains("active")) {
                btn.classList.toggle("active");
            }
        });
    });
    changeTempDisplay(temp);
}

export function activeTempUnit() {
    let tempUnit;
    tempBtns.forEach((btn) => {
        if (btn.classList.contains("active")) {
            const unit = btn.textContent.split("");
            if (unit[1] == "F") {
                tempUnit = "f";
            } else {
                tempUnit = "c";
            }
        }
    });
    return tempUnit;
}
