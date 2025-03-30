let minuteEl = document.getElementById('minute');
let secondEl = document.getElementById('second');
let scoreEl1 = document.getElementById('teamScore1');
let scoreEl2 = document.getElementById('teamScore2');
let minuteTime = 20
let secondTime = 5

function incrementTime() {
    minuteTime += 1
    minuteEl.textContent = minuteTime
}

function decrementTime() {
    if (minuteTime > 0) {
        minuteTime--;
        minuteEl.textContent = minuteTime;
    }
}

function incrementSecond() {
    secondTime = (secondTime + 1) % 60; // Loop seconds back to 0 after 59
    secondEl.textContent = secondTime.toString().padStart(2, '0'); // Add leading zero
}
function decrementSecond() {
    if (secondTime > 0 || minuteTime > 0) {
        if (secondTime === 0) {
            secondTime = 59;
            decrementTime();
        } else {
            secondTime--;
        }
        secondEl.textContent = secondTime.toString().padStart(2, '0');
    }
}

function updateScore(scoreEl, value) {
    const currentScore = parseInt(scoreEl.textContent);
    const newScore = currentScore + value;
    if (newScore >= 0) {
        scoreEl.textContent = newScore.toString().padStart(3, '0');
    }
}

function incrementScore1() {
    updateScore(scoreEl1, 2);
}

function decrementScore1() {
    updateScore(scoreEl1, -2);
}

function incrementScore2() {
    updateScore(scoreEl2, 2);
}

function decrementScore2() {
    updateScore(scoreEl2, -2);
}
