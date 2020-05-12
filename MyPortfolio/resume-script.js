const animateName = (name) => {
    animateName.classList.add("animated", "fadeInLeft")
}

const animateTitle = (title) => {
    animateTitle.classList.add("animated", "fadeInRight")
}

const element = document.querySelector('#name');
element.classList.add('animate__animated', 'animate__adeInLeft');