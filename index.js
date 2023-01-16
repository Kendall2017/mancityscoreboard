let homeScoreEl = document.getElementById("home-score");
let homeScore = 0;

let guestScoreEl = document.getElementById("guest-score");
let guestScore = 0;

function increaseHomeScoreBy1() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreBy2() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreBy3() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreBy1() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreBy2() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreBy3() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function newgame() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}
