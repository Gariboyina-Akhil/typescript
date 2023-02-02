"use strict";
console.log("Kizoku oni naru othokoda");
const person = {
    ak: [1, "akhil"]
};
const body = document.querySelector("#show");
const onAdd = () => {
    const a = document.querySelector("#num1");
    const b = document.querySelector("#num2");
    const c = +a.value + +b.value;
    const html = (c) => `<h1>${c}<h1>`;
    console.log(c);
    try {
        body.insertAdjacentHTML("beforeend", html(c));
    }
    catch (error) {
        console.log("Nothing to woory");
    }
};
