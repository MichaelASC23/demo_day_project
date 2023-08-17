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
    location.href = "index.html";
}


//Search button
searchBtn.onclick = function(event){
    console.log("Clicked Button");
    event.preventDefault();

    sessionStorage.setItem('label', input.value)

    // New York Search Conditional
    if(input.value == "New York" || input.value == "new york"){
       
       
        location.href = "city.html";
        
        
        // Define Url
        const newyorkurl = "https://api.teleport.org/api/urban_areas/teleport%3Adr5rs/details/"
        
        //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "block";

    }


    //Miami Search Conditional
    else if(input.value == "Miami" || input.value == "miami") {
        // Change from main.html to city.html
        location.href = "city.html";

        //Define Url 
        const miamiurl = "https://api.teleport.org/api/urban_areas/teleport%3Adhwfx/details/";

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
    else if(input.value =="Boston" || input.value == "boston") {
        // Change from main.html to city.html
        location.href = "city.html";

        //Define Url 
        const bostonurl = "https://api.teleport.org/api/urban_areas/teleport%3Adrt2z/details/";
    }

    // Los Angeles Search Conditional 
    else if(input.value == "Los Angeles" || input.value == "los angeles") {
        // Change from main.html to city.html
        location.href = "city.html";

        //Define Url 
        const losurl = "https://api.teleport.org/api/urban_areas/teleport%3A9q5ct/details/";
    }

    // Seattle Search Conditional
    else if(input.value == "Seattle" || input.value == "seattle") {
        // Change from main.html to city.html
        location.href = "city.html";

        //Define Url 
        const seattleurl = "https://api.teleport.org/api/urban_areas/teleport%3Ac23nb/details/";
    }

    // Denver Search Conditional 
    else if(input.value == "Denver" || input.value == "denver") {
        // Change from main.html to city.html
        location.href = "city.html";

        //Define Url 
        const denverurl = "https://api.teleport.org/api/urban_areas/teleport%3A9xj65/details/";
    }

    // San Francisco Search Conditional
    else if(input.value == 'San Francisco' || input.value == 'san francisco') {
        // Change from main.html to city.html
        location.href = 'city.html'
       
        //Define Url 
        const sanurl = "https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/details/";

    }

    // Atlanta Search Conditional    
    else if(input.value == 'Atlanta' || input.value == 'atlanta') {
        // Change from main.html to city.html
        location.href = 'city.html'

        //Define Url 
        const atlantaurl = "https://api.teleport.org/api/urban_areas/teleport%3Adjgzz/details/";
    }

    // Chicago Search Conditional    
    else if(input.value == 'Chicago' || input.value == 'chicago') {
        // Change from main.html to city.html
        location.href = 'city.html'

        //Define Url 
        const chicagourl = "https://api.teleport.org/api/urban_areas/teleport%3Adp3wn/details/";
    
    }

    // Washington DC Search Conditional    
    else if(input.value == 'Washington DC' || input.value == 'washington dc') {
        // Change from main.html to city.html
        location.href = 'city.html'

        //Define Url 
        const washingtonsurl = "https://api.teleport.org/api/urban_areas/teleport%3Adqcjq/details/"
    }

    else if(input.value == ''){
        alert("Please enter a city");
    }

    else {
        alert("Sorry, this city is not available");
    }

}

