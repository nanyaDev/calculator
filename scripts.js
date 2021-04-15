const calc = document.querySelector('#calculator');
const buttons = calc.querySelectorAll('button');

buttons.forEach(button=> {
  button.addEventListener('click', e => {
    processClick(e.target);
  })
});

let acc = null;
let op = '';
let clear = false;

const processClick = button => {
  const output = document.querySelector('#output');

  if (clear && button.className === 'num') {
    output.textContent = '';
    clear = false; 
  }

  if (button.className === 'num')
    output.textContent += button.textContent;

  else if (button.className === 'op') { 
    operate();
    op = button.textContent;
    output.textContent = display(acc);
    clear = true;
  }

  else if (button.className === 'eval') { 
    operate();
    output.textContent = display(acc);
    op = '';
    acc = null;
    clear = true;
  }

  else if (button.className === 'clear') {
    output.textContent = ''; 
    acc = null;
    op = ''; 
  }
}

const operate = () => {
  const num = +document.querySelector('#output').textContent;
 
  if (!acc) {
    acc = num;
    return;
  } 

  switch(op) {
    case '+':
      acc += num;
      break;
    case '-':
      acc -= num;
      break;
    case '*':
      acc *= num;
      break;
    case '/': 
      acc /= num;
      break;
  } 
}

const display = num => {
  const n = Math.round(num * 1000) / 1000;
  const s = n.toString();
  return s === 'Infinity' ? '🥺' : s;
}