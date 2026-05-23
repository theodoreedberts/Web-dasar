$(document).ready(function(){

    $('#tambah').click(function(){
        let isiCatatan = $('textarea').val().trim();
        let pilihWarna = $('#warna').val();

        if (isiCatatan === ""){
            alert("Isi catatan!");
            return; 
        }

        let $cardTeks = $(`
            <div class="cards">
                <div class="teksCatatan">${isiCatatan}</div>
                <div class="btnAksi">
                    <button class="btnPenting">Tandai Penting</button>
                    <button class="btnHapus">Hapus</button>
                </div>
            </div>
        `); 

        $cardTeks.css("background-color", pilihWarna);
        $cardTeks.data("isImportant", false);

        $('#result').append($cardTeks);

        $('textarea').val("");
    });

    $('#result').on('click','.btnPenting',function(){
        let $kartuInduk = $(this).closest('.cards');
        let statusPenting = $kartuInduk.data("isImportant");

        if (statusPenting == false){
            $kartuInduk.css("border", "3px solid red");
            $kartuInduk.data("isImportant", true);
        } else {
            $kartuInduk.css("border", "1px solid transparent");
            $kartuInduk.data("isImportant", false);
        }
    });


    $('#result').on('click', '.btnHapus', function() {
        $(this).closest('.cards').remove(); 
    });

});