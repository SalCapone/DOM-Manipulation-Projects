const questions = document.getElementsByClassName("question");
const icons = document.getElementsByClassName("icon");
const answers = document.getElementsByClassName("answer");

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        if(icons[i].textContent === '-') {
            icons[i].textContent = "+";
            answers[i].style.height = "0px";
        } else {
            icons[i].textContent = "-";
            answers[i].style.height = "120px";
        }
    })
}