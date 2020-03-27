var backtop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

function closeModal() {
    // backtop.style.display = "none"
    // modal.style.display = "none"
    if(modal) {
        modal.classList.remove('open');
    }
    backtop.classList.remove('open');
}

for(var i=0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block'
        // backtop.style.display = 'block'
        // modal.className = 'open';
        modal.classList.add('open');
        backtop.classList.add('open');
    });
}

if(backtop) {
    backtop.addEventListener("click", function() {
        // mobileNav.style.display = 'none'
        mobileNav.classList.remove('open')
        closeModal();
    });
}

if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}



if(toggleButton) {
    toggleButton.addEventListener("click", function() {
        // mobileNav.style. display = 'block'
        // backtop.style.display = 'block'
        mobileNav.classList.add('open');
        backtop.classList.add('open');
    });
}