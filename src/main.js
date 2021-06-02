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


const bodyElem = document.querySelector('body');



function setRandomColor() {
    const rand = randomIntegerFromInterval(0, colors.length - 1);
    // console.log(colors[rand]);
    return colors[rand];
}

const buttonsElem = document.querySelector('.buttons');


const changeColors = function changeColor() {
    bodyElem.style.backgroundColor = setRandomColor();
}


const colorsIsActive = document.querySelector('.btn-disabled');

let timerId;

const btnStart = buttonsElem.querySelectorAll('button')[0];
console.log(btnStart);


buttonsElem.addEventListener('click', (e) => {
    if ((e.target.dataset.action === 'start') && (!colorsIsActive) ) {
        timerId = setInterval(changeColors, 1000);
        // console.log('START was pressed');
        e.target.classList.toggle('btn-disabled');

    
    }
    
    if (e.target.dataset.action === 'stop') {
        
        if (document.querySelector('.btn-disabled')) {
            // console.log('Stop was pressed');
            btnStart.classList.toggle('btn-disabled');
            clearInterval(timerId);
        }
        
                          
    }
        
}
);