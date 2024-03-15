const refs = {
  numberEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
};

function createBoxes(number) {
  refs.boxesEl.innerHTML = '';
  
  for(let i = 0; i < number; i++) {
    let element = document.createElement('div');
    element.style.width = 30 + (10 * i) + 'px';
    element.style.height = 30 + (10 * i) + 'px';
    element.style.backgroundColor = getRandomHexColor();
    
    refs.boxesEl.append(element);
  }
}

refs.createEl.addEventListener('click', function() {
  let number = refs.numberEl.value;
  if(number > 0 && number <= 100) {
    createBoxes(number);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

refs.destroyEl.addEventListener('click', function() {
  refs.boxesEl.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}