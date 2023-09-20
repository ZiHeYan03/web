//index scrolling effect
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.index li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


//Fade in Effect
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.index li a');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'in-view' class to elements when they come into view
    function addInViewClass() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('in-view');
            }
        });
    }

    // Initial check for elements in view
    addInViewClass();

    // Add a scroll event listener to check for elements in view while scrolling
    window.addEventListener('scroll', addInViewClass);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});