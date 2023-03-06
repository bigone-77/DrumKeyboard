// Detecting Button Press

var numberDrumButtons = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

    });

}

//  Detecting KeyBoard Press

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            
        default:
            break;
    }
}


