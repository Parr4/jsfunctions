// let colorSelect = "green"
let boton = document.querySelector("#boton")

function changeColor(color) {
    colorSelect = color
    document.body.style.backgroundColor = colorSelect
}
const div = document.getElementById('div1')
div.addEventListener("click", function () {
    changeColor("yellow")

});

changeColor("green")

