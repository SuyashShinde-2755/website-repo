document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap Carousel
    const carousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        touch: true
    });

    // Keyboard Navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            carousel.prev();
        } else if (event.key === 'ArrowRight') {
            carousel.next();
        }
    });

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carouselElement = document.getElementById('testimonialCarousel');
    
    carouselElement.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
    }, false);
    
    carouselElement.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;
        
        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                carousel.next();
            } else {
                carousel.prev();
            }
        }
    }

    // Add fade-in animation to testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Show active testimonial with animation
    function animateActiveTestimonial() {
        const activeCard = document.querySelector('.carousel-item.active .testimonial-card');
        if (activeCard) {
            activeCard.style.opacity = '1';
            activeCard.style.transform = 'translateY(0)';
        }
    }

    // Listen for slide events
    carouselElement.addEventListener('slid.bs.carousel', animateActiveTestimonial);
    
    // Animate initial testimonial
    animateActiveTestimonial();
});
