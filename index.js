var drumFinder = document.querySelectorAll(".drum");

for (var i = 0; i < drumFinder.length; i++) {
    function createAudioHandler(i) {
        return function(){
            var audio;
            if (i < 4) {
                var tomAudio = "./sounds/tom-" + (i + 1) + ".mp3";
                audio = new Audio(tomAudio);
            } else if (i == 4) {
                audio = new Audio("./sounds/snare.mp3");  
            } else if (i == 5) {
                audio = new Audio("./sounds/crash.mp3");  
            } else if (i == 6) {
                audio = new Audio("./sounds/kick-bass.mp3");  
            }
            audio.play();
            buttonAnimation(drumFinder[i].innerHTML);
        }
    }

    drumFinder[i].addEventListener("click", createAudioHandler(i));
    

}


document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    
    switch (event.key){
        case "w":
            var tom1= new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;   
        
        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;   
        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;   
        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();
            break;     
        case "k":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();
            break;     
        case "l":
            var bass= new Audio("./sounds/kick-bass.mp3");
            bass.play();
            break; 
        default: console.log(event.key);
        

    }
})

function buttonAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    if (["w","a","s","d","j","k","l"].includes(currentKey)){
        activeBtn.classList.add("pressed");
    }
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100)
}