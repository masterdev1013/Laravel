const slider = document.getElementById("slider");
const elements = [...slider.children];
let positions = [];
let main = screen.width;

elements.forEach((e) => {
    e.style.position = "relative";
    e.style.right = -slider.clientWidth + "px";
    e.style.display = "inline-block";
});

let speed = 5;

setInterval(() => {
    if (main <= -screen.width + elements[0].clientWidth) {
        positions = [];
        main = screen.width;
    }

    elements.forEach((e, i) => {
        if (positions[i] === undefined) {
            positions.push(-slider.clientWidth);
        } else {
            positions[i] = positions[i] + speed;
            if (positions[i] >= 0) main -= speed;
            e.style.right = positions[i] + "px";
        }
    });
}, 100);
