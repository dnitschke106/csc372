// Wait for the document to be fully loaded before executing the code
$(document).ready(function() {
    // Sticky navbar functionality
    var navbar = $("#navbar"); // Select the navbar element using its ID
    var sticky = navbar.offset().top; // Get the initial offset from the top of the document

    function handleScroll() {
        // Check if the user has scrolled past the initial position of the navbar
        if ($(window).scrollTop() >= sticky) {
            navbar.addClass("sticky"); // Add a "sticky" class to make the navbar stick to the top
        } else {
            navbar.removeClass("sticky"); // Remove the "sticky" class if not scrolled past the initial position
        }
    }

    // Attach the handleScroll function to the scroll event
    $(window).scroll(handleScroll);

    // Fade-in elements functionality
    var fadeElements = $(".fade-in-text"); // Select elements with class "fade-in-text"

    function isElementInViewport(el) {
        // Check if the element is within the viewport
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollFade() {
        // Check and fade in elements when they come into the viewport
        fadeElements.each(function() {
            var element = $(this);
            if (isElementInViewport(element) && element.css("opacity") !== "1") {
                element.css("opacity", 1); // Set opacity to 1 for a fade-in effect
            }
        });
    }

    // Attach the handleScrollFade function to the scroll event
    $(window).scroll(handleScrollFade);

    handleScrollFade(); // Trigger the handleScrollFade function on page load to check initial visibility
});



$(document).ready(function() {
    // Function to display slides in a slideshow automatically
    function showSlides() {
        // Get all elements with the class "mySlides"
        var slides = $(".mySlides");
        // Loop through all the slides and hide them
        slides.hide();
        // Increment the slide index
        slideIndex++;
        // If the slide index exceeds the total number of slides, reset the slide index to 1
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        // Display the current slide
        slides.eq(slideIndex - 1).show();

        // Call this function recursively after 10000 milliseconds (10 seconds)
        setTimeout(showSlides, 10000);
    }

    // Variable to keep track of the slide index
    var slideIndex = 0;
    showSlides();
});


$(document).ready(function() {
    // Function to periodically update the text position in a wave-like motion
    function updateTextPosition() {
        $('#subtitle').animate({ marginTop: '+=10px' }, 1500, 'swing')
                     .animate({ marginTop: '-=10px' }, 1500, 'swing');
    }

    // Set an interval to call the updateTextPosition function every 3 seconds
    setInterval(updateTextPosition, 3000);
});

$(document).ready(function() {
    // Function to periodically change the brightness of the glowing text
    function updateBrightness() {
        $('#brandName').animate({ opacity: 0.75 }, 1500, 'swing')
                       .animate({ opacity: 1 }, 1500, 'swing');
    }

    // Set an interval to call the updateBrightness function every 3 seconds
    setInterval(updateBrightness, 3000);
});