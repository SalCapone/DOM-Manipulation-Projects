const modalBtn = document.getElementById("modal-btn");
const modalContainer = document.getElementById("modal-box");
const exitBtn = document.getElementById("x");

function showModal() {
    modalContainer.style.display = "flex";
    modalContainer.style.animation = "slideModal 0.2s linear 1"
    modalContainer.style.top = "350px";
}

function exitModal() {
    modalContainer.style.animation = "slideModalUp 0.2s linear 1";
    modalContainer.style.top = "-100px";
    setTimeout(() => {
        modalContainer.style.display = "none";
    }, 1000);
}


modalBtn.onclick = showModal;
exitBtn.onclick = exitModal;