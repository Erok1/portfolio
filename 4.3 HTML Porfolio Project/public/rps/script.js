stars = 0
starspc = 0
round = 0

function result(user) {
    res = ""
    
round += 1;
document.getElementById("round1").innerHTML = round;
    
    const choice = ['rock', 'paper', 'scissors'];
    let pc = choice[Math.floor(Math.random() * choice.length)];

    console.log(user)
    console.log(pc)

    if (user == "rock" && pc=="paper" || user == "scissors" && pc=="rock" || user == "paper" && pc=="scissors") {
        res = "lost";
        console.log(res)
        starspc += 1

        if (starspc == 1){
            document.querySelector(`img#star4`).src = `./assets/star-fill.svg`;
          }
          else if (starspc == 2){
            document.querySelector(`img#star5`).src = `./assets/star-fill.svg`;
          }
          else {
            document.querySelector(`img#star6`).src = `./assets/star-fill.svg`;
            setTimeout(() => {
              document.getElementById("round").style.display = "none";
              document.getElementById("container").style.display = "none";
              document.getElementById("lost").style.display = "block";
              document.getElementById("resultend").innerHTML = "YOU LOST!"; 
              document.getElementById("score").innerHTML = stars + ":" + starspc;
              }, "1500");

    }
    }

    else if (pc == "rock" && user=="paper" || pc == "scissors" && user=="rock" || pc == "paper" && user=="scissors") {
        res = "win";
        console.log(res)
        stars += 1

        if (stars == 1){
            document.querySelector(`img#star1`).src = `./assets/star-fill.svg`;
          }
          else if (stars == 2){
            document.querySelector(`img#star2`).src = `./assets/star-fill.svg`;
          }
          else {
            document.querySelector(`img#star3`).src = `./assets/star-fill.svg`;
            setTimeout(() => {
              document.getElementById("round").style.display = "none";
              document.getElementById("container").style.display = "none";
              document.getElementById("lost").style.display = "block";
              document.getElementById("resultend").innerHTML = "YOU WON!"; 
              document.getElementById("score").innerHTML = stars + ":" + starspc;
              }, "1500");
    }


}
        else {
            res = "tie"
            console.log(res)
        }



        if (pc == "paper") {
            document.querySelector(`img#right`).src = `./assets/paper.svg`;

          
          } 
          else if (pc == "scissors"){
            document.querySelector(`img#right`).src = `./assets/scissors.svg`;
          }
          else {
            document.querySelector(`img#right`).src = `./assets/rock.svg`;
}

if (user=="paper"){
    document.getElementById('rock').style.display = 'none'
    document.getElementById('left').style.display = 'none';
    setTimeout(() => {
    document.getElementById('rock').style.display = 'inline';
    document.getElementById('left').style.display = 'inline';
    }, "1500");
    
    }
    
    else if (user=="rock"){
    document.getElementById('paper').style.display = 'none';
    document.getElementById('left').style.display = 'none';
    setTimeout(() => {
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('left').style.display = 'inline';
    }, "1500");
    
    }
    
    else {
    document.getElementById('paper').style.display = 'none';
    document.getElementById('rock').style.display = 'none';
    setTimeout(() => {
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('rock').style.display = 'inline';
    }, "1500");
    }
}
function playagain(){
  location.reload();
}