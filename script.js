document.addEventListener('DOMContentLoaded', function() {
  var increaseButton = document.querySelector('.btn-cong');
  var decreaseButton = document.querySelector('.btn-tru');
  var input = document.querySelector('.input-soluong');

  increaseButton.addEventListener('click', function() {
    var currentValue = parseInt(input.value);
    input.value = currentValue + 1;
  });

  decreaseButton.addEventListener('click', function() {
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
      input.value = currentValue - 1;
    }
  });
});
