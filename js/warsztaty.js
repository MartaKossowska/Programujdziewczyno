console.log("działa!");

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // tutaj będziemy umieszczać kod ze wszystkich zadań
    // Mam 100% pewnosci, że caly plik html sie wczytal
    
    var menuList = document.querySelectorAll(".nav-list > li"); //Wyszukaj mi tylko bezpośrednie dzieci
    console.log(menuList); // Mamy tutaj tablicę!!!
    
    for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener( "mouseover", function(){
            //this to taka zmienna, która jest tym, na co najechał użytkownik
            var dropdown = this.querySelector(".dropdown");
            //console.log(dropdown);
            
            if (dropdown != null) {
                dropdown.style.display = "block";
            }
            
        })
    }
    
    for (var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener( "mouseout", function(){
            //this to taka zmienna, która jest tym, na co najechał użytkownik
            var dropdown = this.querySelector(".dropdown");
            //console.log(dropdown);
            
            if (dropdown != null) {
                dropdown.style.display = "none";
            }
            
        })
    }
    
    
    
    });