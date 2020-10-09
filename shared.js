var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var noBtn = document.querySelector('.modal__action--negative');

// console.dir(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener('click', closeModal);

noBtn.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}
