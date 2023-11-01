const nav = document.getElementById("leftnav");
const overlay = document.getElementById("overlay");

function openNav() {
    console.log("opening");
    overlay.classList.replace("hidden", "block");
    nav.style.transform = "translateX(25vw)";
}

function closeNav() {
    console.log("closing");
    nav.style.transform = "translateX(-25vw)";
    overlay.classList.replace("block", "hidden");
}

overlay.addEventListener("click", closeNav);
