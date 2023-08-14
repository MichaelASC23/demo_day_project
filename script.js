// References
let logo = document.getElementById("logo");
let about = document.getElementById("about");
let welcome = document.getElementById("welcome");
let input = document.getElementById("searchBar");
let searchBtn = document.getElementById("submitBtn");


// Home Button
logo.onclick = function(event){
    event.preventDefault();
    location.href = main.html;
}

//About button 
about.onclick = function(event){
    event.preventDefault();
    
}

//Search button
searchBtn.onclick = function(event){
    event.preventDefault();

    // Defining Url
    

    // New York Search Conditional
    if(input.value == "New York" || input.value == "new york"){

    }
}