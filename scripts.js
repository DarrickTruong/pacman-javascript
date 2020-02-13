let world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let pacman = {
    x: 1,
    y: 2
}

let score = 0;

function displayWorld() {
    let output = '';

    for (let i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 1) {
                output += "<div class='brick'></div>";
            }
            if (world[i][j] == 0) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] == 2) {
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";

}

function displayScore() {
    document.getElementById('score').innerHTML = "<p>" + score + "</p>";
    console.log(score);
}



displayWorld();
displayPacman();
displayScore();

document.onkeydown = function (e) {
    // console.log(e.keyCode);
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 1) {
        pacman.x--;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 1) {
        pacman.x++;
    }
    else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 1) {
        pacman.y--;
    }
    else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 1) {
        pacman.y++;
    }
    if (world[pacman.y][pacman.x] == 0) {
        world[pacman.y][pacman.x] = 2;
        score += 10;
        displayWorld();
        displayScore();
    }
    displayPacman();
}
