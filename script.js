document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------
    // Current Year in Footer
    // ---------------------------------------
    const yearElements = document.querySelectorAll('#year');

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // ---------------------------------------
    // Mobile Navigation Menu
    // ---------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu after clicking a navigation link
        const links = navLinks.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }


    // ---------------------------------------
    // Scroll Reveal Animation
    // ---------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    // Stop observing after the element becomes visible
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});
