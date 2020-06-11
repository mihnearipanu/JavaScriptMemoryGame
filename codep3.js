function amestecare(){
    var campuri = document.querySelectorAll(".element");
    var fructe = ["",
    "mar.jpg",
    "portocala.jpg",
    "afine.jpg",
    "lamaie.jpg",
    "cirese.jpg",
    "mango.jpg",
    "banana.jpg",
    "kiwi.jpg"];
    
    var elemente = [];
    var campuriDescoperite = 0;

    for(var i = 1; i <= campuri.length / 2; i++){
        elemente.push(i);
        elemente.push(i);
    }
    for (var i = elemente.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = elemente[i];
        elemente[i] = elemente[j];
        elemente[j] = k;
    }
    
    for (var i = 0; i < campuri.length; i++) {
        campuri[i].innerHTML = "?";
        campuri[i].id = i;
        campuri[i].addEventListener("click", arata);
    }

    var carte1 = null;
    var carte2 = null;
    var blocat = false;
    
    
    function arata(elem) {
        var id = this.id;
        if(blocat == true){
            return;
        }
        if(id == carte1){
            return;
        }
        
        if(carte1 == null){
            carte1 = id;
            var comandaImagine="<img src='"+fructe[elemente[carte1]]+"'>";
            campuri[carte1].innerHTML=comandaImagine;
            return;
        }
        
        if(carte2 != null){
            return;
        }
        
        carte2 = id;
        var comandaImagine = "<img src='"+fructe[elemente[carte2]]+"'>";
        campuri[carte2].innerHTML = comandaImagine;
        
        if(elemente[carte1] == elemente[carte2]){
            campuri[carte1].removeEventListener("click", arata);
            campuri[carte2].removeEventListener("click", arata);
            carte1 = null;
            carte2 = null;
            blocat = false;
            campuriDescoperite += 2;
            if(campuriDescoperite == 16){
                window.alert("Ai castigat!");
            }
        }
        else{
            window.setTimeout(ascunde, 1000);
        }
    }
    
    function ascunde(){
        blocat = true;
        campuri[carte1].innerHTML="?";
        campuri[carte2].innerHTML="?";
        carte1 = null;
        carte2 = null;
        blocat = false;
    }

}