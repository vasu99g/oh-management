const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const class_form_btn = document.getElementById("class-form-btn");
const instructor_form = document.getElementById("instructor-form");
const class_form = document.getElementById("class-form");

let class_form_mode = false;

sign_up_btn.addEventListener("click", () => {
    // instructor login page
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    // student login page
    instructor_form.style.transition = "all 0.5s 1s";
    class_form.style.transition = "all 0.5s 1s";

    container.classList.remove("sign-up-mode");
});

class_form_btn.addEventListener("click", () => {
    instructor_form.style.transition = "0s";
    class_form.style.transition = "0s";

    const instructor_page_title = document.getElementById("instructor-page-title");
    const instructor_page_para = document.getElementById("instructor-page-para");

    if (class_form_mode) {
        instructor_form.style.visibility = "visible";
        class_form.style.visibility = "hidden";

        class_form_btn.innerHTML = "Create a Class";

        instructor_page_title.innerHTML = "First Time ?";
        instructor_page_para.innerHTML = "Please create and set up a new class.";

        class_form_mode = false;
    } else {
        instructor_form.style.visibility = "hidden";
        class_form.style.visibility = "visible";

        class_form_btn.innerHTML = "Instructor Login";

        instructor_page_title.innerHTML = "Instructor Sign In ?";
        instructor_page_para.innerHTML = "Log in as an instructor or start a new session.";

        class_form_mode = true;
    }
});