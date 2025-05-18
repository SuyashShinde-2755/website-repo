
// Preview start

// Select the elements
const picContainer = document.querySelector('.pic');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Get the width of one slide (adjust based on your image width)
const slideWidth = picContainer.querySelector('img').clientWidth;

// Function to slide left
function slideLeft() {
    picContainer.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
    });
}

// Function to slide right
function slideRight() {
    picContainer.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
    });
}

// Event listeners for arrow buttons
leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

// Event listener for keyboard arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        slideLeft();
    } else if (event.key === 'ArrowRight') {
        slideRight();
    }
});

// Preview end
