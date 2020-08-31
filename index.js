window.addEventListener('click', () => {
  var randomRoll_1 = Math.floor(Math.random() * 6) + 1;
  var randomRoll_2 = Math.floor(Math.random() * 6) + 1;

  var dye1 = 'dist/css/images/dice' + randomRoll_1 + '.png';
  var dye2 = 'dist/css/images/dice' + randomRoll_2 + '.png';

  document.querySelector('.dice1').setAttribute('src', dye1);
  document.querySelector('.dice2').setAttribute('src', dye1);
});
