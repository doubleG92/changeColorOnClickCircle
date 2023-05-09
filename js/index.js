// const yellow = document.getElementById('yellowball')
// const red = document.getElementById('redball')
// const green = document.getElementById('greenball')
// const purple = document.getElementById('purpleball')

// const changeColorOnClick = (color) => {
//     let x = document.querySelector('body');
//     x.style.backgroundColor = color;
// };

// yellow.addEventListener('click', () => {
//     changeColorOnClick('yellow')
// });

// red.addEventListener('click', () => {
//     changeColorOnClick('red')
// });

// green.addEventListener('click', () => {
//     changeColorOnClick('green')
// });

// purple.addEventListener('click', () => {
//     changeColorOnClick('purple')
// });


const allCircles = document.querySelector('.circleGroup')


function click (event) {
    // let currentColor = event.target.id
    // document.body.style.backgroundColor = currentColor
    let currentColorData = event.target.getAttribute('data-color')
    document.body.style.backgroundColor = currentColorData
}
allCircles.addEventListener('click', click)

function doubleClick (event) {
    let currentColorData = event.target.getAttribute('data-color')
    document.body.style.backgroundColor = 'white'
}
allCircles.addEventListener('dblclick', doubleClick)



// body === window

window.addEventListener('click', (event) => {
    if(event.target.contains(allCircles)) {
        document.body.style.backgroundColor = 'white'
    }
})