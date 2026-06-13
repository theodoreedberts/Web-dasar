<?php
include 'connection.php';

$keyword = $_GET['keyword'] ?? '';

try {

    if ($keyword != '') {

        $sql = "SELECT *
                FROM buku
                WHERE judul LIKE :keyword
                OR penulis LIKE :keyword
                OR penerbit LIKE :keyword
                OR tahun_terbit LIKE :keyword
                OR stok LIKE :keyword";

        $stmt = $conn->prepare($sql);
        $stmt->bindValue(':keyword', "%$keyword%", PDO::PARAM_STR);

    } else {

        $sql = "SELECT * FROM buku";
        $stmt = $conn->prepare($sql);

    }

    $stmt->execute();

} catch(PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Perpustakaan - 2572002</title>
</head>
<body>

<h1>TAMBAH BUKU</h1>

<?php
if(isset($_GET['msg'])){
    echo "<p>" . htmlspecialchars($_GET['msg']) . "</p>";
}
?>

<form method="POST" action="connection.php">

    <p>Judul</p>
    <input type="text" name="judul" required>

    <p>Penulis</p>
    <input type="text" name="penulis" required>

    <p>Penerbit</p>
    <input type="text" name="penerbit" required>

    <p>Tahun Terbit</p>
    <input type="number" name="tahun_terbit" required>

    <p>Stok</p>
    <input type="number" name="stok" required>

    <br><br>

    <input type="submit" name="btnSubmit" value="Save">

</form>

<br>

<form method="GET">

    <input
        type="text"
        name="keyword"
        placeholder="Cari buku..."
        value="<?= htmlspecialchars($keyword) ?>"
    >

    <button type="submit">Cari</button>

</form>

<br>

<table border="1" cellpadding="5" cellspacing="0">

    <tr>
        <th>No</th>
        <th>Judul</th>
        <th>Penulis</th>
        <th>Penerbit</th>
        <th>Tahun</th>
        <th>Stok</th>
    </tr>

    <?php

    if($stmt->rowCount() > 0){

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){

            echo "<tr>";
            echo "<td>".$row['id']."</td>";
            echo "<td>".$row['judul']."</td>";
            echo "<td>".$row['penulis']."</td>";
            echo "<td>".$row['penerbit']."</td>";
            echo "<td>".$row['tahun_terbit']."</td>";
            echo "<td>".$row['stok']."</td>";
            echo "</tr>";
        }

    } else {

        echo "<tr>";
        echo "<td colspan='6'>Data tidak ditemukan</td>";
        echo "</tr>";

    }

    ?>

</table>

</body>
</html>