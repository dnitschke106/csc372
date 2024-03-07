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
    var fadeElements = $(".fade-in-text"); // Select elements with the class "fade-in-text"

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
    // DOM manipulation to add new content
    var newTitle = $('<h2>').text('Existing Submissions:'); // Create a new h2 element with text

    // Find the position where the new element should be added
    var position = $('#contactForm');

    // Insert the new element into its position
    position.append(newTitle);

    // Function to handle form submission
    function submitReview() {
        // Get values from form
        var userName = $('#userName').val();
        var userReview = $('#userReview').val();

        // Validate input
        if ($.trim(userName) === '' || $.trim(userReview) === '') {
            alert('Please fill in both fields before submitting a review.');
            return;
        }

        // Create a new list item to display the review/question
        var newReviewItem = $('<li>').text(`${userName}: ${userReview}`);

        // Append the new review item to the review list
        $('#reviewList').append(newReviewItem);

        // Clear form fields
        $('#userName').val('');
        $('#userReview').val('');
    }

    // Loop through paragraphs and manipulate them using a for loop
    $('p').each(function() {
        // Manipulate each paragraph 
        $(this).css({
            'font-weight': 'bold'
        });
    });

    $('#submitButton').click(submitReview);
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