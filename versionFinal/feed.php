<?php

include 'includes/vote.php';

$phase1 = new Phase('Phase 1', 'Q2 2024', 45, 'Website Launch');
$phase2 = new Phase('Phase 2', 'Q3 2024', 156, 'Complete Functional Feed');
$phase3 = new Phase('Phase 3', 'Q4 2024', 267, 'Full Scale Product: Feed, Profiles, Calendar & Map integration.');

// Start a session
session_start();

include 'includes/validation_functions.php';


// Initialize form data
$username = '';
$age = '';
$gender = '';

// Initialize error messages array
$errors = [
    'username' => '',
    'age' => '',
    'gender' => ''
];

// Initialize message variable
$message = '';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $username = htmlspecialchars($_POST['username']);
    $age = htmlspecialchars($_POST['age']);
    $gender = $_POST['gender'] ?? '';

    // Validate data
    if (!validate_text_length($username, 2, 50)) {
        $errors['username'] = 'Username must be between 2 and 50 characters.';
    }

    if (!validate_number_range($age, 18, 100)) {
        $errors['age'] = 'Age must be a number between 18 and 100.';
    }

    $valid_genders = ['male', 'female']; // Array of valid options
    if (!validate_option($gender, $valid_genders)) {
        $errors['gender'] = 'Please select a valid gender.';
    }

    // Check for errors
    $error_count = count(array_filter($errors));
    if ($error_count > 0) {
        $message = 'Please correct the errors in the form.';
    } else {
        // Set visitor_info cookie with relevant information
        $visitor_info = "Username: $username, Age: $age, Gender: $gender";
        setcookie("visitor_info", $visitor_info, time() + (86400 * 30), "/"); // Cookie expires in 30 days

        // Store visitor information in session variables
        $_SESSION['username'] = $username;
        $_SESSION['age'] = $age;
        $_SESSION['gender'] = $gender;

        $message = 'Form data is valid.';
    }
}


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
			<!-- check stock -->
	  		<h5><span class="emphasized"> <?= $phase1->details ?> </span>
			<h5> Time remaining: <?= $phase1->format_time(); ?> </h5>
	  	</div>

	  	<div class="column">
	  		<h2> <?= $phase2->title ?> </h2>
	  		<h5> <?= $phase2->period ?> </h5>
			<!-- check stock -->
	  		<h5><span class="emphasized"> <?= $phase2->details ?> </span>
			<h5> Time remaining: <?= $phase2->format_time(); ?> </h5>
	  	</div>

	  	<div class="column">
	  		<h2> <?= $phase3->title ?> </h2>
	  		<h5> <?= $phase3->period ?> </h5>
			<!-- check stock -->
	  		<h5><span class="emphasized"> <?= $phase3->details ?> </span>
			<h5> Time remaining: <?= $phase3->format_time(); ?> </h5>
	  	</div>
	</div>

        <br> <br> 

        <h2>Sign-Up Form</h2>
        <?php if ($message): ?>
            <p><?php echo $message; ?></p>
        <?php endif; ?>

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="<?php echo $username; ?>" required>
            <span><?php echo $errors['username']; ?></span>
            <br><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" value="<?php echo $age; ?>" required>
            <span><?php echo $errors['age']; ?></span>
            <br><br>
            <label>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" <?php if ($gender == 'male') echo 'checked'; ?>>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" <?php if ($gender == 'female') echo 'checked'; ?>>
            <label for="female">Female</label>
            <span><?php echo $errors['gender']; ?></span>
            <br><br>
            <button type="submit">Submit</button>
        </form>
    
        <?php if(isset($_COOKIE['visitor_info'])): ?>
            <?php $cookie_value = htmlspecialchars($_COOKIE['visitor_info']); ?>
            <p>Visitor Information (from cookie): <?php echo $cookie_value; ?></p>
        <?php endif; ?>
    
        <?php if(isset($_SESSION['username'])): ?>
            <p>Visitor Information (from session):</p>
            <ul>
                <li>Username: <?php echo htmlspecialchars($_SESSION['username']); ?></li>
                <li>Age: <?php echo htmlspecialchars($_SESSION['age']); ?></li>
                <li>Gender: <?php echo htmlspecialchars($_SESSION['gender']); ?></li>
            </ul>
        <?php endif; ?>

        <br> <br>
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
