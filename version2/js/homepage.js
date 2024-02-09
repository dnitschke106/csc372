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


// Define a simple object representing a laptop
var attributes = {
    feed: "Social Media Feed Specific to your Chapter",
    frats: "All Publically Listed Fraternities",
    map: "Interactive Map with Member Locations Around the World",
    plan: "Event Scheduling & Planning"
};

// Access and output each property of the laptop object
document.addEventListener("DOMContentLoaded", function() {
    var productInfoDiv = document.getElementById("productInfo");

    // Output brand and model
    productInfoDiv.innerHTML += "<p><strong>Platform Attributes:</strong></p>" 
    productInfoDiv.innerHTML += "<p>" + attributes.frats + "</p>";
    productInfoDiv.innerHTML += "<p>" + attributes.feed + "</p>";
    productInfoDiv.innerHTML += "<p>" + attributes.map + "</p>";
    productInfoDiv.innerHTML += "<p>" + attributes.plan + "</p>";
});


