const form = document.forms["form"];
form.addEventListener("input", inputHandler);

function inputHandler ({target}) {
    if (target.hasAttribute("data-reg")) {
        inputCheck (target)
    }
}
