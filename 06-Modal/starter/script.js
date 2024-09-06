'use strict';

const allOfMOdals = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
console.log(allOfMOdals);

function showModal() {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}
 function removModal() {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
};

for (let i = 0; i < allOfMOdals.length; i++)
  allOfMOdals[i].addEventListener('click', showModal);

overLay.addEventListener('click', removModal);
closeModal.addEventListener('click', removModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' ) {
        showModal();
    } else if (e.key !== 'Enter') {
        removModal();
    }
})