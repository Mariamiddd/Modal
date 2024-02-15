const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//closing modal by adding hidden class
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// opening modal by removing hidden class
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//adding event listener on all 3 buttons.
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if ((e.key === 'Escape') & !modal.classList.contains('hidden')) {
    closeModal();
  }
});
