const scrollDownArrow = document.querySelector('.scrollDown');

// Create a dummy element at the bottom of the page
const dummyElement = document.createElement('div');
dummyElement.style.position = 'absolute';
dummyElement.style.bottom = '0px';
dummyElement.style.left = '0px';
document.body.appendChild(dummyElement);

scrollDownArrow.addEventListener('click', () => {
    dummyElement.scrollIntoView({
        behavior: 'smooth'
    });
});