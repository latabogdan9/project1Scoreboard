let homeScore = document.querySelector(".homeScore");
let guestScore = document.querySelector(".guestScore");
let pointsToAdd = 0;

function addScore(points, team) {
    pointsToAdd=0
    if (team == 1) {
        points = points + parseInt(homeScore.textContent);
        homeScore.textContent = points;
    }
    else {
        points = points + parseInt(guestScore.textContent);
        guestScore.textContent = points;
    }
    if (parseInt(guestScore.textContent) < parseInt(homeScore.textContent)) {
        document.getElementById("homewin").style.backgroundColor = "lime";
        document.getElementById("guestwin").style.backgroundColor = "black";
    }
    else if (parseInt(guestScore.textContent) > parseInt(homeScore.textContent)) {

        document.getElementById("homewin").style.backgroundColor = "black";
        document.getElementById("guestwin").style.backgroundColor = "lime";
    }
    else {
        document.getElementById("homewin").style.backgroundColor = "goldenrod";
        document.getElementById("guestwin").style.backgroundColor = "goldenrod";
    }
}

function reset() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    document.getElementById("homewin").style.backgroundColor = "goldenrod";
    document.getElementById("guestwin").style.backgroundColor = "goldenrod";
}