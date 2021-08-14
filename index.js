const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];



const startButtonRef = document.querySelector('[data-action="start"]');
const stopButtonRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

startButtonRef.addEventListener('click', startChangingColor);
stopButtonRef.addEventListener('click', stopChangingColor);



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


idInterval = null;

function startChangingColor() {
    idInterval = setInterval(() => {
        bodyRef.style.backgroundColor = `${colors[randomIntegerFromInterval(0, 6)]
            }`;
        startButtonRef.disabled = true;
    }, 1000)
};

function stopChangingColor() {
    clearInterval(idInterval);
    startButtonRef.disabled = false;
};