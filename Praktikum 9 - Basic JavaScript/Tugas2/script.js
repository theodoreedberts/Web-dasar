var tinggi;
var berat;

function hitung(tombol){
    var teksHasil = " ";
    var teksHasil2 = " "
    if (tombol == 'bmi'){

        tinggi = parseFloat(document.getElementById("tinggi").value);
        berat = parseFloat(document.getElementById("berat").value);

        if(tinggi > 0 && berat > 0){
            var tinggiMeter = tinggi/100;
            var hasil = berat / (tinggiMeter * tinggiMeter);
            var skorBmi = hasil.toFixed(1);

            if (hasil < 18.5){
                teksHasil = "Kekurangan Berat Badan";
                teksHasil2 = "Berat badan kurang dari ideal. Pertimbangkan pola makan bergizi untuk menaikkan berat badan secara sehat";
            }else if (hasil >= 18.5 && hasil <= 24.9){
                teksHasil = "Normal";
                teksHasil2 = "Selamat! Berat badan kamu ideal";
            }else if (hasil >= 25.0 && hasil <= 29.9){
                teksHasil = "Kelebihan Berat Badan";
                teksHasil2 = "Berat badan kamu sedikit di atas ideal. Mulai perbaiki pola makan dan tingkatkan aktifitas fisik";
            }else{
                teksHasil = "Obesitas"
                teksHasil2 = "Berat badan kamu jauh di atas ideal. Segera konsultasikan dengan dokter atau ahli gizi";
            }
            
            document.getElementById("hasil-bmi").innerHTML = 
                "BMI: " + skorBmi +
                "<p>Kategori:" + teksHasil + "</p>" +
                "<p>" + teksHasil2 + "</p>"; 
        }else{
            alert("Masukkan Tinggi dan Berat Badan yang valid ");
        }
    }else if (tombol == 'reset'){

        document.getElementById("tinggi").value = " ";
        document.getElementById("berat").value = " ";
        document.getElementById("umur").value = " ";
        document.getElementById("hasil-bmi").value = " ";
    }      
}   
