console.log("działa!");

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // tutaj będziemy umieszczać kod ze wszystkich zadań
    // Mam 100% pewnosci, że caly plik html sie wczytal
    
    // Zadanie 1
    
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
    
    // Zadanie 2
    
       var buttons = document.querySelectorAll('.read-more');

    function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', showHide);
  }
    
    // Zadanie 3
    
    window.addEventListener('scroll', function() {
      var menu = document.querySelector(".navbar-nav");
        console.log("linia");
     menu.style.borderBottom = "1px solid #7f7f7f";       
      });
    
    
});