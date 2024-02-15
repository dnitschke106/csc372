// Sricky nav bar for when user scrolls past the header 
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function handleScroll() {
        if (window.scrollY >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'fade-in-text'
    var fadeElements = document.querySelectorAll(".fade-in-text");

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        fadeElements.forEach(function (element) {
            if (isElementInViewport(element) && element.style.opacity !== "1") {
                element.style.opacity = 1;
            }
        });
    }

    // Attach the handleScroll function to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Trigger the handleScroll function on page load to check initial visibility
    handleScroll();
});



// DOM manipulation to add new content
var newTitle = document.createElement('h2'); // Create a new h2 element
var newText = document.createTextNode('Existing Submissions:'); // Create a text node
newTitle.appendChild(newText); // Attach the text node to the new paragraph

// Find the position where the new element should be added 
var position = document.getElementById('contactForm');

// Insert the new element into its position
position.appendChild(newTitle);



// Function to handle form submission
function submitReview() {
    // Get values from form
    var userName = document.getElementById('userName').value;
    var userReview = document.getElementById('userReview').value;

    // Validate input
    if (userName.trim() === '' || userReview.trim() === '') {
        alert('Please fill in both fields before submitting a review.');
        return;
    }

    // Create a new list item to display the review/question
    var newReviewItem = document.createElement('li');
    newReviewItem.textContent = `${userName}: ${userReview}`;

    // Append the new review item to the review list
    document.getElementById('reviewList').appendChild(newReviewItem);

    // Clear form fields
    document.getElementById('userName').value = '';
    document.getElementById('userReview').value = '';
}


// Loop through paragraphs and manipulate them using a for loop
var paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++) {
    // Manipulate each paragraph (you can modify this as per your requirements)
    paragraphs[i].style.fontWeight = 'bold';
    paragraphs[i].style.fontSize = '22px'; 
}
