<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_webdasar";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    //set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$nama = FILTER_INPUT(INPUT_POST,'nama');
$email = FILTER_INPUT(INPUT_POST,'email');
$pesan = FILTER_INPUT(INPUT_POST,'pesan');
$dikirim = FILTER_INPUT(INPUT_POST, 'dikirim');
$btnSubmit = FILTER_INPUT(INPUT_POST, 'btnSubmit');

        if ($btnSubmit){
            $nama = FILTER_INPUT(INPUT_POST, 'nama');
            $email = FILTER_INPUT(INPUT_POST, 'email');
            $pesan = FILTER_INPUT(INPUT_POST, 'pesan');
            $dikirim = date("Y-m-d H:i:s");
        
            try {
            $sql = "INSERT INTO pesan (nama, email, pesan, dikirim) VALUES (:nama, :email ,:pesan, :dikirim)";
            $stmt = $conn->prepare($sql);
            $stmt->execute
            ([
                'nama' => $nama,
                'email' => $email,
                'pesan' => $pesan,
                'dikirim' => $dikirim,
                ]);
            $msg = "New record created successfully";
            } catch(PDOException $e) {
            $msg = $sql . "<br>" . $e->getMessage();
            }
            header("location:index.php?msg=".$msg);
            $conn = null;
            exit;
        }

       

?>