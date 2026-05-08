

function ubah (){
    var latar = document.getElementById("latar").value; 
    var tombol= document.getElementById("tombol").value;
    var teks = document.getElementById("warna-teks").value;
    
    var body = document.body;
    var tombolUbah = document.getElementById("ubah");
    var hasilTeks = document.getElementById("teks");

    body.style.backgroundColor = latar;
    tombolUbah.style.backgroundColor = tombol;

    
    if(hasilTeks) {
        hasilTeks.innerHTML = "Ini warna " + teks;
        hasilTeks.style.color = teks;
    }
}