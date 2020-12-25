const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const class_form_btn = document.querySelector("#class-form-btn");
const container = document.querySelector(".container");
let class_form_mode = false;

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

class_form_btn.addEventListener("click", () => {
    if (class_form_mode) {
        document.getElementById("instructor-form").style.visibility = "visible";
        document.getElementById("class-form").style.visibility = "hidden";
        class_form_btn.innerHTML = "Create a Class";
        class_form_mode = false;
    } else {
        document.getElementById("instructor-form").style.visibility = "hidden";
        document.getElementById("class-form").style.visibility = "visible";
        class_form_btn.innerHTML = "Instructor Login";
        class_form_mode = true;
    }
});