let score = 0;
let timeLeft = 30;
let gameTimer;
let spawnTimer ;

const targetTypes = [
 { points: 10, size: 120 },
 { points: 20, size: 100 },
 { points: 50, size: 80 }
];

const sisaWaktu = document.getElementById('sisa-waktu');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('game-area');
const overlay = document.getElementById('overlay');
const gameOverTeks = document.getElementById('game-over');
const startBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');

startBtn.addEventListener('click',() => {
    score = 0;
    timeLeft = 30;
    scoreDisplay.innerText = score;
    sisaWaktu.innerText = timeLeft;
    overlay.classList.add('hidden');

    gameTimer = setInterval(() =>{
        timeLeft--;
        sisaWaktu.innerText = timeLeft;
        if (timeLeft<=0){
            endGame();
        }
    },1000);

    spawnTimer = setInterval(createTarget, 500);
});

restartBtn.addEventListener('click',() => {
    location.reload();
});

function createTarget(){
    const target = document.createElement('img');
    target.classList.add('target');
    target.src = 'mole.png';

    const type = targetTypes[Math.floor(Math.random() * targetTypes.length)];

    target.style.width = type.size + 'px';
    target.style.height = type.size + 'px';

    const x = Math.random() * (gameArea.clientWidth - type.size) + (type.size / 2);
    const y = Math.random() * (gameArea.clientHeight - type.size) + (type.size / 2);
            
    target.style.left = x + 'px';
    target.style.top = y + 'px';
    
    gameArea.appendChild(target);

    target.addEventListener('click',()=>{
        score += type.points;
        scoreDisplay.innerText = score;
        target.remove();
    });

    setTimeout(() => {
        if (document.body.contains(target)) {
            target.remove();
        }
    }, 1500);
}

function endGame() {
    clearInterval(gameTimer);
    clearInterval(spawnTimer);

         
    document.querySelectorAll('.target').forEach(t => t.remove());

            
    gameOverTeks.innerText = `Skor Akhir: ${score}`;
    gameOverTeks.classList.remove('hidden');
    startBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
    overlay.classList.remove('hidden');
}