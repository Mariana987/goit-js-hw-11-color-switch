const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntegerFromInterval)

const startButtonRef = document.querySelector('.start_button')
console.log(startButtonRef)
const stopButtonRef = document.querySelector('.stop_button')
console.log(stopButtonRef);




const onStartButton = (color) => {
    const markup = colors
        .map(({ color }))
    return
};

startButtonRef.addEventListener('click', onStartButton);
// console.log(showColor(color))

