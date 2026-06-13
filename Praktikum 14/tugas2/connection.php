<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "perpustakaan";

try {
    $conn = new PDO(
        "mysql:host=$servername;dbname=$dbname;charset=utf8",
        $username,
        $password
    );

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

$btnSubmit = filter_input(INPUT_POST, 'btnSubmit');

if ($btnSubmit) {

    $judul = filter_input(INPUT_POST, 'judul');
    $penulis = filter_input(INPUT_POST, 'penulis');
    $penerbit = filter_input(INPUT_POST, 'penerbit');
    $tahun_terbit = filter_input(INPUT_POST, 'tahun_terbit');
    $stok = filter_input(INPUT_POST, 'stok');

    try {

        $sql = "INSERT INTO buku
                (judul, penulis, penerbit, tahun_terbit, stok)
                VALUES
                (:judul, :penulis, :penerbit, :tahun_terbit, :stok)";

        $stmt = $conn->prepare($sql);

        $stmt->execute([
            ':judul' => $judul,
            ':penulis' => $penulis,
            ':penerbit' => $penerbit,
            ':tahun_terbit' => $tahun_terbit,
            ':stok' => $stok
        ]);

        header("Location: index.php?msg=Data berhasil ditambahkan");
        exit;

    } catch(PDOException $e) {

        header("Location: index.php?msg=" . urlencode($e->getMessage()));
        exit;
    }
}
?>