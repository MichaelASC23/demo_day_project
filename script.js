// References
let logo = document.getElementById("logo");
let about = document.getElementById("about");
let welcome = document.getElementById("welcome");
let input = document.getElementById("searchBar");
let searchBtn = document.getElementById("submitBtn");


// Home Button
logo.onclick = function(event){
    event.preventDefault();
    location.href = "main.html";
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
        // Change from main.html to city.html
        location.href = "city.html";
        //Display changes from none to block, while the rest will be turn into none
    }


    //Miami Search Conditional
    if(input.value == "Miami" || input.value == "miami") {
        // Change from main.html to city.html
        location.href = "city.html";
    }

    //Boston Search Conditional
    if(input.value =="Boston" || input.value == "boston") {
        // Change from main.html to city.html
        location.href = "city.html";
    }

    // Los Angeles Search Conditional 
    if(input.value == "Los Angeles" || input.value == "los angeles") {
        // Change from main.html to city.html
        location.href = "city.html";
    }

    // Seattle Search Conditional
    if(input.value == "Seattle" || input.value == "seattle") {
        // Change from main.html to city.html
        location.href = "city.html";
    }

    // Denver Search Conditional 
    if(input.value == "Denver" || input.value == "denver") {
        // Change from main.html to city.html
        location.href = "city.html";

    // San Fransisco Search Conditional
    }
    if(input.vlaue == 'San Fransisco' || input.value == 'san fransisco') {
        // Change from main.html to city.html
        location.href = 'city.html'

    // Atlanta Search Conditional    
    }
    if(input.vlaue == 'Atlanta' || input.value == 'atlanta') {
        // Change from main.html to city.html
        location.href = 'city.html'

    // Chicago Search Conditional    
    }
    if(input.vlaue == 'Chicago' || input.value == 'chicago') {
        // Change from main.html to city.html
        location.href = 'city.html'

    // Washington DC Search Conditional    
    }
    if(input.value == 'Washington DC' || input.valye == 'washington dc') {
        // Change from main.html to city.html
        location.href = 'city.html'
    }


}