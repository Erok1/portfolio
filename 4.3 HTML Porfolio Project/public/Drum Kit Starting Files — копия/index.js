

drum = document.querySelectorAll("button").length;
for(var i = 0; i<drum; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var letter = this.innerHTML;
        audio(letter);
        animation(letter)
    })

}
document.addEventListener("keypress", function(event){
    animation(event.key)
    audio(event.key)
})

function audio(el){
    switch(el){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");  
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");    
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio("./sounds/snare.mp3");    
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("./sounds/crash.mp3");    
            tom6.play();
            break;    
        case "l":
            var tom7 = new Audio("./sounds/kick-bass.mp3");    
            tom7.play();
            break;
    }
}
function animation(key){
    var element = document.querySelector("." + key)
    element.classList.add("pressed")
    setTimeout(() =>{
        element.classList.remove("pressed")
    }, 100)
}