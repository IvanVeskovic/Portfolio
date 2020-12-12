let prevScrollpos = window.pageYOffset;
const navBar = document.querySelector('.navigation');
const navBarBtn = document.querySelector('.nav-btn');
const mobiNav = document.querySelector('.navigation__mob-list');
const bars = document.querySelectorAll('.nav-btn__bar');

const about = document.getElementById('section-about').offsetTop;

// Trigger for navbar background and hide
window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    
    hideNavbar(currentScrollPos);
    changeNavbarColor(currentScrollPos);
}

// Auto hide navbar
hideNavbar = (currPos) => {
    if (prevScrollpos > currPos) {
        navBar.style.top = "0";
      } else {
        navBar.style.top = "-40rem";
      }
      prevScrollpos = currPos;
}

// Change color of navbar when hit about section
changeNavbarColor = (currPos) => {
    if(innerWidth >= 768) {
        if(about - 120 < currPos) {
            navBar.style.backgroundColor = 'rgba(0, 132, 191, 0.6)';
        } else if (about - 120 > currPos) {
            navBar.style.backgroundColor = 'transparent';
        }
    } else {
        navBar.style.backgroundColor = 'rgba(0, 132, 191, 0.9)';
    }
}


// Toggle mobile navigation
navBarBtn.addEventListener('click', function(e){
    e.preventDefault();

    navBarBtn.classList.toggle('active-mobi');
})

// Preloader 
window.addEventListener('load', function() {
    this.setTimeout(() => {
        document.querySelector('.preloader').style.display= 'none';
    }, 1500)
    
})

// Mobile sklills
document.querySelector('#section-skills').addEventListener('click', function(e) {
    const arrowDown = `<i class="far fa-caret-square-down"></i>`;
    const arrowUp = `<i class="far fa-caret-square-up"></i>`;

    if(e.target.classList.contains('fa-caret-square-down')){
        e.target.parentElement.parentElement.parentElement.lastElementChild.style.display = 'flex';
        e.target.parentElement.innerHTML = arrowUp;
        console.log(e.target.parentElement);
    } else if(e.target.classList.contains('fa-caret-square-up')) {
        e.target.parentElement.parentElement.parentElement.lastElementChild.style.display = 'none';
        e.target.parentElement.innerHTML = arrowDown;
    }
})

