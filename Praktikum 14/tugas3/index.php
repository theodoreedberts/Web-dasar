<?php
include 'connection.php'
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesan - 2572002</title>
</head>
<body>
    <h1>Form Pesan</h1>

    <form action="connection.php" method = "POST">
        <p>Nama</p>
        <input type="text" name = "nama">

        <p>Email</p>
        <input type="text" name = "email" placeholder = "email@contoh.com">

        <p>Pesan</p>
        <input type="text" name= "pesan" placeholder = "Tulis Pesan ">

        <br><br>
        <input type="submit" name="btnSubmit" value="Save">
    </form>


    <?php
        try {
            $sql = "SELECT id, nama, email, pesan, dikirim FROM pesan";
            
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
            echo "<table><tr><th>#</th><th>Nama</th><th>Email</th><th>Pesan</th><th>Waktu</th></tr>";
            
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['nama'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['pesan'] . "</td>";
            echo "<td>" . $row['dikirim'] . "</td>";
            echo "</tr>";
            }
            echo "</table>";
            unset($result);
            } else {
            echo "No records found.";
            }
            } catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
            }
            $conn = null;       
        
    ?>
</body>
</html> 