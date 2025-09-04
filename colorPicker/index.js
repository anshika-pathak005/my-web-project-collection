const colorInput = document.getElementById("colorInput");
const hexInput = document.getElementById("hexInput");
const colorCode = document.querySelector(".color_code");
const container = document.querySelector(".container");

// update box color and text
function updateColor(color) {
    container.style.backgroundColor = color;
    colorCode.textContent = color.toUpperCase();
}

// when color picker changes
colorInput.addEventListener("input", (e) => {
    const color = e.target.value;
    hexInput.value = color.toUpperCase();
    updateColor(color);
});

// when hex code changes
hexInput.addEventListener("input", (e) => {
    let color = e.target.value;
    if (color.charAt(0) !== "#") {
        color = "#" + color;
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(color)) {  // valid hex
        colorInput.value = color;
        updateColor(color);
    }
});
