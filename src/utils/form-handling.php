<?php
$host = "localhost";
$dbname = "u128425984_test";
$username = "u128425984_moltontom_test";
$password = "Wilson2000"; // Replace with your actual password

// Create a database connection
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $successCount = 0;
    $errorCount = 0;

    $columnValues = array_fill(0, 10, null); // Initialize an array to hold column values

    foreach ($_POST as $key => $value) {
        if (strpos($key, "P") === 0) {
            $index = substr($key, 1);
            $columnValues[$index - 1] = $value; // Update the corresponding column value
        }
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO test_predictions (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    if ($stmt->execute($columnValues)) {
        $successCount++;
    } else {
        $errorCount++;
    }
}
?>




