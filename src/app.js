const form = document.forms["form"];

const button = form.element["button"];

form.addEventListener("input", inputHandler);

function inputHandler ({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck (target)
    }
}
function inputCheck (el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if (reg.test (inputValue)) {
        el.style.border = "2px solid rgb(0, 196, 0)";
    }
    else {
        el.style.border = "2px solid rgb(255,0,0)"
    }
}
