<?php
$host = "localhost";
$dbname = "test";
$username = "root";
$password = "Wilson2000"; // Replace with your actual password

// Create a database connection
$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Initialize response message
$responseMessage = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $successCount = 0;
    $errorCount = 0;

    foreach ($_POST as $key => $value) {
        if (strpos($key, "P") === 0) {
            $index = substr($key, 1);
            $lastName = $_POST[$key];

            // Insert data into the database
            $stmt = $conn->prepare("INSERT INTO testtable (position, name) VALUES (?, ?)");

            if ($stmt->execute([$index, $lastName])) {
                $successCount++;
            } else {
                $errorCount++;
            }
        }
    }

    if ($successCount > 0) {
        $responseMessage .= "Inserted $successCount records successfully.";
    }

    if ($errorCount > 0) {
        $responseMessage .= " Encountered $errorCount errors.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Form Handling Result</title>
</head>
<body>
    <?php echo $responseMessage; ?>
</body>
</html>


