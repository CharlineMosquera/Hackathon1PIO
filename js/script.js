
function register() {
    alert("Felicidades!! Se registro exitosamente");
}

function cambiaBackgroundColor() {
    const colors = ['#1c1c1c', '#ff6b35', '#3b5998', '#5b2c6f', '#28b463', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}