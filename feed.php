<?php
include 'includes/vote.php';

$phase1 = new Phase('Phase 1', 'Q2 2024', 45, 'Website Launch');
$phase2 = new Phase('Phase 2', 'Q3 2024', 156, 'Complete Functional Feed');
$phase3 = new Phase('Phase 3', 'Q4 2024', 267, 'Full Scale Product: Feed, Profiles, Calendar & Map integration.');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greek Connect Homepage</title>
    <link rel="stylesheet" href="css/feed.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
</head>
<body>

    <header>
        <img src="images/logo.png" height="400" width="400" alt="Brand Logo">
        <h1 id="brandName"><strong>Greek  Connect</strong></h1>
        <p id="subtitle">Your New Alumni Networking Platform!</p>
    </header>

    <div class="navbar" id="navbar">
        <a href="homepage.html">Home</a>
        <a href="about.html">About</a>
        <a href="feed.php">Feed</a>
        <a href="services.html">Services</a>
        <a href="contact.html">Contact</a>
    </div>

    <main class="container">

        <div class="row">

				    <div class="column">
	  					<h2> <?= $phase1->title ?> </h2>
	  					<h5> <?= $phase1->period ?> </h5>
						<!-- CHECK STOCK -->
	  					<h5><span class="emphasized"> <?= $phase1->details ?> </span>
						<h5> Time remaining: <?= $phase1->format_time(); ?> </h5>
	  				</div>

	  				<div class="column">
	  					<h2> <?= $phase2->title ?> </h2>
	  					<h5> <?= $phase2->period ?> </h5>
						<!-- CHECK STOCK -->
	  					<h5><span class="emphasized"> <?= $phase2->details ?> </span>
						<h5> Time remaining: <?= $phase2->format_time(); ?> </h5>
	  				</div>

	  				<div class="column">
	  					<h2> <?= $phase3->title ?> </h2>
	  					<h5> <?= $phase3->period ?> </h5>
						<!-- CHECK STOCK -->
	  					<h5><span class="emphasized"> <?= $phase3->details ?> </span>
						<h5> Time remaining: <?= $phase3->format_time(); ?> </h5>
	  				</div>
		</div>
        <br> 
        <h2 class="fade-in-text">Interactive Map</h2> <br>

        <div id="map-container" class="fade-in-text">
            <div id="map"></div>
        </div>

    </main>

    <footer>
        <p>Web Developer - David Nitschke</p>
        <a href="mailto:david_nitschke@uri.edu" style="color: rgb(255, 255, 255)"> Reach out at david_nitschke@uri.edu</a>
    </footer>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
        <script>
            window.jQuery || document.write('<script src="js/jquery-3.7.1.min.js"><\/script>')
        </script>
    <script src="js/feed.js"></script>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

</body>
</html>
