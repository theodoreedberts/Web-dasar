var scorePlayer = 0;
var scoreComputer = 0;

function play(playerChoice){
    var choices = ['batu','kertas','gunting'];
    var computerChoice = choices[Math.floor(Math.random()*3)];
    var teksHasil;
    var gambarPlayer;
    var gambarComputer;


    if (playerChoice == 'batu'){
        gambarPlayer = 'rock.png';

    }else if (playerChoice == 'kertas'){
        gambarPlayer = 'paper.png';
    }else{
        gambarPlayer = 'scissor.png';
    }

    if (computerChoice == 'batu'){
        gambarComputer = 'rock.png';

    }else if (computerChoice == 'kertas'){
        gambarComputer = 'paper.png';
    }else{
        gambarComputer = 'scissor.png';
    }


    if (playerChoice == computerChoice){
        teksHasil = "DRAW";
    }
    else if (
        (playerChoice == 'batu' && computerChoice == 'gunting') ||
        (playerChoice == 'kertas' && computerChoice == 'batu') ||
        (playerChoice == '' && computerChoice == 'gunting') 

    ){
        teksHasil = "PLAYER WIN";
        scorePlayer++;
    }else{
        teksHasil = "COMPUTER WIN";
        scoreComputer++;
    }

    document.getElementById("score-player").innerHTML = scorePlayer;
    document.getElementById("score-computer").innerHTML = scoreComputer;
    document.getElementById("hasil").innerHTML = teksHasil;
    document.getElementById("gambar-player").src = gambarPlayer;
    document.getElementById("gambar-computer").src = gambarComputer;

}