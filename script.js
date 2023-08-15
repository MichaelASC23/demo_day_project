// References on main.html
let logo = document.getElementById("logo");
let about = document.getElementById("about");
let welcome = document.getElementById("welcome");
let input = document.getElementById("searchBar");
let searchBtn = document.getElementById("submitBtn");
// Reference on city.html
// Containers 
let newyorkC = document.getElementById("newyork_Container");
let miamiC = document.getElementById("miami_Container");
let bostonC = document.getElementById("boston_Container");
let losC = document.getElementById("losangeles_Container");
let seattleC = document.getElementById("seattle_Container");
let denverC = document.getElementById("denver_Container");
let sanC = document.getElementById("sanfrancisco_Container");
let atlantaC = document.getElementById("atlanta_Container");
let chicagoC = document.getElementById("chicago_Container");
let washingtonC = document.getElementById("washingtondc_Container");


//Nav bar

// Home Button
logo.onclick = function(event){
    event.preventDefault();
    location.href = "main.html";
}




//Search button
searchBtn.onclick = function(event){
    event.preventDefault();

    
    // New York Search Conditional
    if(input.value == "New York" || input.value == "new york"){
        // Change from main.html to city.html
        location.href = "city.html";
        
        // Define Url
        const newyorkurl = "https://api.teleport.org/api/urban_areas/teleport%3Adr5rs/details/"
        //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "flex";
        miamiC.style.display = "none";
        bostonC.style.display = "none";
        losC.style.display = "none";
        seattleC.style.display = "none";
        denverC.style.display = "none";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";


    }


    //Miami Search Conditional
    if(input.value == "Miami" || input.value == "miami") {
        // Change from main.html to city.html
        location.href = "city.html";


        //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "none";
        miamiC.style.display = "flex";
        bostonC.style.display = "none";
        losC.style.display = "none";
        seattleC.style.display = "none";
        denverC.style.display = "none";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";

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

