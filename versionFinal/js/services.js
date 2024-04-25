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




document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the button
    document.getElementById("feedButton").addEventListener("click", function() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define the file path to the local HTML content
        var filePath = "ajax/feedInfo.html"; 

        // Open a GET request to the specified file path
        xhr.open("GET", filePath, true);

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    // Update the content container with the loaded HTML
                    document.getElementById("feedInfo").innerHTML = xhr.responseText;
                } else {
                    // Log an error message if the request fails
                    console.error("Failed to load content. Status code: " + xhr.status);
                }
            }
        };

        // Send the request
        xhr.send();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the button
    document.getElementById("mapButton").addEventListener("click", function() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define the file path to the local XML content
        var filePath = "ajax/mapInfo.xml"; 

        // Open a GET request to the specified file path
        xhr.open("GET", filePath, true);

        // Set the response type to "document" for XML
        xhr.responseType = "document";

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    // Get the XML document from the response
                    var xmlDoc = xhr.responseXML;

                    // Get the <title> and <about> elements
                    var titleElement = xmlDoc.querySelector("map title");
                    var aboutElement = xmlDoc.querySelector("map about");

                    // Create HTML content using the retrieved elements
                    var content = "<h2>" + titleElement.textContent + "</h2>";
                    content += "<p>" + aboutElement.textContent + "</p>";

                    // Update the content container with the collected content
                    document.getElementById("mapInfo").innerHTML = content;
                } else {
                    // Log an error message if the request fails
                    console.error("Failed to load content. Status code: " + xhr.status);
                }
            }
        };

        // Send the request
        xhr.send();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the button
    document.getElementById("calendarButton").addEventListener("click", function() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Define the file path to the local JSON content
        var filePath = "ajax/calendarInfo.json"; 

        // Open a GET request to the specified file path
        xhr.open("GET", filePath, true);

        // Set the response type to "json" for JSON
        xhr.responseType = "json";

        // Set up the callback function to handle the response
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    // Get the JSON object from the response
                    var jsonObject = xhr.response;

                    // Create HTML content using the retrieved JSON data
                    var content = "<h2>" + jsonObject.title + "</h2>";
                    content += "<p>" + jsonObject.about + "</p>";

                    // Update the content container with the collected content
                    document.getElementById("calendarInfo").innerHTML = content;
                } else {
                    // Log an error message if the request fails
                    console.error("Failed to load content. Status code: " + xhr.status);
                }
            }
        };

        // Send the request
        xhr.send();
    });
});


$(document).ready(function() {
    $("#feedButton").click(function() {
        // Specify the URL of the HTML page to load
        var url = "ajax/feedInfo.html";

        // Select the element to load HTML code into and add a jQuery effect
        $("#feedInfo").hide().load(url, function() {
            // Callback function runs after content is loaded

            // Apply a fadeIn effect to make the content visible with a transition
            $(this).slideDown("slow");
        });
    });
});

$(document).ready(function() {
    $("#mapButton").click(function() {
        var url = "ajax/mapInfo.xml"; 

        // Select the element to load XML code into and add a jQuery effect
        $("#mapInfo").hide().load(url, function(response, status, xhr) {
            if (status === "error") {
                console.error("Failed to load XML content. Status code: " + xhr.status + ", Error: " + xhr.statusText);
            } else {
                // Callback function runs after content is loaded
                var xmlData = $.parseXML(response);
                var title = $(xmlData).find("title").text();
                var content = $(xmlData).find("about").text(); 

                // Update the content container with the loaded XML and title
                $(this).html("<h2>" + title + "</h2>" + content + "<br>").slideDown("slow");
            }
        });
    });
});

$(document).ready(function() {
    $("#calendarButton").click(function() {
        var url = "ajax/calendarInfo.json"; 

        // Select the element to load JSON code into and add a jQuery effect
        $("#calendarInfo").hide().load(url, function(response, status, xhr) {
            if (status === "error") {
                console.error("Failed to load JSON content. Status code: " + xhr.status + ", Error: " + xhr.statusText);
            } else {
                // Callback function runs after content is loaded
                var jsonData = JSON.parse(response);
                var title = jsonData.title;
                var content = jsonData.about;

                // Update the content container with the loaded JSON and title
                $(this).html("<h2>" + title + "</h2>" + content).slideDown("slow");
            }
        });
    });
});





