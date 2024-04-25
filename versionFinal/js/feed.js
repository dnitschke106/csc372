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

// Moving text 
$(document).ready(function() {
    // Function to periodically update the text position in a wave-like motion
    function updateTextPosition() {
        $('#subtitle').animate({ marginTop: '+=10px' }, 1500, 'swing')
                     .animate({ marginTop: '-=10px' }, 1500, 'swing');
    }

    // Set an interval to call the updateTextPosition function every 3 seconds
    setInterval(updateTextPosition, 3000);
});

// Brightness of Brand Name
$(document).ready(function() {
    // Function to periodically change the brightness of the glowing text
    function updateBrightness() {
        $('#brandName').animate({ opacity: 0.75 }, 1500, 'swing')
                       .animate({ opacity: 1 }, 1500, 'swing');
    }

    // Set an interval to call the updateBrightness function every 3 seconds
    setInterval(updateBrightness, 3000);
});


//voting function
$(document).ready(function() {
    $(".vote-option").click(function() {
        var option = $(this).attr('id'); // Get the ID of the clicked option
        $.post("vote.php", { option: option }, function(data) {
            // Update the vote count displayed on the webpage
            $("#" + option + " .vote-count").text(data);
        });
    });
});



// Map API with Leaflet 
function initializeMap() {
    // Coordinates for the University of Rhode Island
    const uriCoordinates = [41.4862, -71.5304];

    // Create a map centered at the specified coordinates
    const map = L.map('map').setView(uriCoordinates, 15);

    // Add OpenStreetMap as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker at the University of Rhode Island with a popup
    const marker = L.marker(uriCoordinates).addTo(map);
    
    // Add information to be displayed in the popup
    const popupContent = "<strong>University of Rhode Island</strong><br>Founded: 1892<br>Type: Public University<br><strong>Fraternities:</strong><br>Phi Kappa Psi<br>Theta Chi<br>Tau Epsilon Phi<br>Sigma Alpha Epsilon<br>Kappa Sigma<br>Delta Chi<br>Phi Gamma Delta<br>Pi Kappa Alpha<br>Theta Delta Chi<br>Alpha Epsilon Pi<br>Lambda Chi Alpha<br>Sigma Alpha Mu<br>Tau Kappa Epsilon<br>Theta Xi";
    
    // Bind the popup to the marker
    marker.bindPopup(popupContent).openPopup();
  }

  // Call the initializeMap function when the document is ready
  document.addEventListener('DOMContentLoaded', initializeMap);
  
