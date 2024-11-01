function play(){
    player1 = Math.floor(Math.random() * 6) + 1;
    player2 = Math.floor(Math.random() * 6) + 1;

    var filename = "dice" + player1 + ".png"; //image from 1 to 6
    var pathname = "images/" + filename;
    var show1 = document.querySelectorAll("img")[0];
    show1.setAttribute("src", pathname);

    var filename1 = "dice" + player2 + ".png"; //image from 1 to 6
    var pathname1 = "images/" + filename1;
    var show1 = document.querySelectorAll("img")[1];
    show1.setAttribute("src", pathname1);

    if (player1 > player2) {
        document.getElementById("result").innerHTML = " 🚩 You win!"
    }
    else if (player1 < player2) {
        document.getElementById("result").innerHTML = "You lost! 🚩"
    }
    else {
        document.getElementById("result").innerHTML = "Draw!"
    }
}