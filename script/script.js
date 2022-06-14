const open = document.querySelector('.button');
const close = document.querySelector('.close-button');
const popup = document.getElementById('popup');
const space = document.querySelector('.list-content');


const togglelist = function () {
   popup.classList.toggle('open');
}

open.addEventListener('click', function (e) {
   // fixScroll.hide();
   popup.style.display = 'block'
   e.stopPropagation();
   togglelist();
});
close.addEventListener('click', function (e) {
   popup.style.display = 'none'
   e.stopPropagation();
   togglelist();
});


document.addEventListener('click', function (e) {
   if (popup.classList.contains('open')) {
      popup.addEventListener('click', function (e) {
         if (!e.target.closest('.list-content')) {
            togglelist();
            popup.style.display = 'none';
         }
      })
   }
});

