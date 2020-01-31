$(document).ready(function() {

    var mijnKleurCodes = [50, 100, 150, 200, 250];
    var mijnSpeelveld = document.getElementById("playground");
    var mijnVierkantjes = document.getElementsByClassName("square");
    var mijnKliks = 0;
    

    initializeMemory();
    
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
    }

    function initializeMemory(){
        //Maak rijen aan
        for(var i=0; i<10;i++){
            mijnSpeelveld.innerHTML += "<div class='row'>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "<div class='square'></div>"+
                "</div>";

        }
        //Geef elk vakje een kleurcode
        for(var j=0; j< mijnVierkantjes.length; j++){
            mijnVierkantjes[j].style.background="rgb("+mijnKleurCodes[getRndInteger(0,5)]+","+mijnKleurCodes[getRndInteger(0,5)]+","+mijnKleurCodes[getRndInteger(0,5)]+")";
        }
    }

    //Tel het aantal clicks en toon het aan
    $(".square").click(function(){
        mijnKliks++;
        $("#responseText").html("<p>"+mijnKliks+" aantal keer geklikt</p>");
        
    });
    //Laat de kleur wit worden en wanneer erop wordt geklikt terugkomen wanneer de muis wordt losgelaten
    var mijnOGKleur = $(".square").style;
    $(".square").mousedown(function(event){
        mijnOGKleur = event.target.style.background;
        event.target.style.background = "white";
    });
    $(".square").mouseup(function(event){
        event.target.style.background = mijnOGKleur;
    });
    
    
    
    
});

