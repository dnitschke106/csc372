<?php
// Function to validate text input length
function validate_text_length($text, $min_length, $max_length) {
    $text_length = strlen($text);
    return ($text_length >= $min_length && $text_length <= $max_length);
}

// Function to validate number input range
function validate_number_range($number, $min_value, $max_value) {
    return ($number >= $min_value && $number <= $max_value && is_numeric($number));
}

// Function to validate selected option
function validate_option($selected_option, $valid_options) {
    return in_array($selected_option, $valid_options);
}
?>
