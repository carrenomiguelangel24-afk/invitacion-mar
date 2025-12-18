// Cangrejos caminando suavemente
const crabs = document.querySelectorAll('.crab');
crabs.forEach((crab) => {
  let direction = 1;
  setInterval(() => {
    let current = parseFloat(getComputedStyle(crab).left);
    if(current > 80) direction = -1;
    if(current < 5) direction = 1;
    crab.style.left = current + direction * 0.2 + '%';
  }, 50);
});

// Peces nadando
const fish = document.querySelectorAll('.fish');
fish.forEach((f) => {
  let direction = 1;
  setInterval(() => {
    let current = parseFloat(getComputedStyle(f).left);
    if(current > 90) direction = -1;
    if(current < 10) direction = 1;
    f.style.left = current + direction * 0.3 + '%';
  }, 50);
});
