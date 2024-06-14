let blue = document.getElementById('blue')
let red = document.getElementById('red')
let green = document.getElementById('green')
let yellow = document.getElementById('yellow')

let asd = document.getElementById('asd')
let qwe = document.getElementById('qwe')

const goblack = id => {
    id.style.backgroundColor = 'black';
    console.log(id);
}

blue.addEventListener("click", function (e) {
    goblack(blue)
})
red.addEventListener("click", function (e) {
    goblack(red)
})
green.addEventListener("click", function (e) {
    goblack(green)
})
yellow.addEventListener("click", function (e) {
    goblack(yellow)
})

document.addEventListener("keydown", (e) => {
    // console.log(e)
    switch (e.key) {
        case 'a':
            asd.style.backgroundColor = 'pink'; break;
        case 's':
            asd.style.backgroundColor = 'orange'; break;
        case 'd':
            asd.style.backgroundColor = 'lightblue'; break;
        case 'q':
            qwe.style.backgroundColor = 'purple'; break;
        case 'w':
            qwe.style.backgroundColor = 'gray'; break;
        case 'e':
            qwe.style.backgroundColor = 'brown'; break;
    }
})
