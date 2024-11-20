<?php
// Replace with your API URL
$apiUrl = "https://hydropulse-d9778.ew.r.appspot.com/api/sensor-data/current/";

// Initialize a cURL session
$ch = curl_init();

// Set the URL and options
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute the request and capture the response
$response = curl_exec($ch);

// Close the cURL session
curl_close($ch);

// Decode the JSON response into a PHP array
$data = json_decode($response, true);

// Check if the data is received successfully
if ($data) {
    // Now you can display or process the data
    echo "Temperature: " . $data['temperature'] . "°C<br>";
    echo "PH: " . $data['ph'] . "<br>";
    echo "Humidity: " . $data['humidity'] . "%<br>";
} else {
    echo "Failed to retrieve data.";
}
?>
