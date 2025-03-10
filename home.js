
/* ***************************************************    
    Navbar JS Start
***************************************************  */
(() => {
    // Get elements
    const openMenuBtn = document.querySelector('.open-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const navLinksContainer = document.querySelector('.nav-links-container');
    const backgroundOverlay = document.querySelector('.background');
    const mediaSize = 992; // Mobile breakpoint

    // Function to open the menu
    openMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.add('open');
        backgroundOverlay.classList.add('active');
    });

    // Function to close the menu
    closeMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        backgroundOverlay.classList.remove('active');
    });

    // Close menu if background overlay is clicked
    backgroundOverlay.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        backgroundOverlay.classList.remove('active');
    });

    // Handle dropdown functionality in responsive mode
    const dropdownBranches = document.querySelectorAll('.dropdown-menu-branch');

    dropdownBranches.forEach(branch => {
        const toggleLink = branch.querySelector('a[data-toggle="dropdown-menu"]');
        const dropdownMenu = branch.querySelector('.dropdown-menu');

        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();

            // Check if we are in responsive mode
            if (window.innerWidth <= mediaSize) {
                const isOpen = branch.classList.contains('active');

                // Close all open dropdowns
                document.querySelectorAll('.dropdown-menu-branch').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-menu').style.maxHeight = null;
                });

                if (!isOpen) {
                    // Open the clicked dropdown
                    branch.classList.add('active');
                    dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
                }
            }
        });
    });
})();

/* ***************************************************    
    Navbar JS End
***************************************************  */
/* ***************************************************    
    Preloader JS Start
***************************************************  */

function loaderAnimation() {
    var loader = document.querySelector("#loading")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2200)  
}
loaderAnimation()
/* ***************************************************    
    Preloader JS End
***************************************************  */

/* ***************************************************    
     Scroll up Button JS Start
***************************************************  */   

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the scroll button element
    const myScrollTopBtn = document.getElementById("myScrollTopBtn");

    // Check if the button exists
    if (!myScrollTopBtn) {
        console.error("Element with ID 'myScrollTopBtn' not found!");
        return; // Stop execution if the button is missing
    }

    // Function to show/hide the scroll button
    function scrollFunction() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 20) {
            myScrollTopBtn.style.display = "block"; // Show button
        } else {
            myScrollTopBtn.style.display = "none"; // Hide button
        }
    }

    // Function to scroll to the top
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Attach scroll and click events
    window.addEventListener("scroll", scrollFunction);
    myScrollTopBtn.addEventListener("click", topFunction);

    // Initialize the button visibility
    scrollFunction();
});


/* ***************************************************    
     Scroll up Button JS End
***************************************************  */  
