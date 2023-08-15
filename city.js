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

// Data from script.js -->  to city.js 
let searchvalue = sessionStorage.getItem('label');
sessionStorage.getItem('label')


if(searchvalue == "New York" || searchvalue == "new york"){
    searchNewYork();
}

if(searchvalue == "Miami" || searchvalue == "miami"){
    searchMiami();
}

if( searchvalue == "Boston" || searchvalue == "boston"){
    searchBoston();
}

if(searchvalue == "Los Angeles" || searchvalue == "los angeles"){
    searchLosAngeles();
}

if(searchvalue == "Seattle" || searchvalue == "seattle"){
    searchSeattle();
}

if(searchvalue == "Denver" || searchvalue == "denver"){
    searchDenver();
}

if(searchvalue == "San Francisco" || searchvalue == "san francisco"){
    searchSanFrans();
}

if(searchvalue == "Atlanta" || searchvalue == "atlanta"){
    searchAtlanta();
}

if(searchvalue == "Chicago" || searchvalue == "chicago"){
    searchChicago();
}

if(searchvalue == "Washington DC" || searchvalue == "washington dc"){
    searchWashington();
}

//Nav bar

// Home Button
logo.onclick = function(event){
    event.preventDefault();
    location.href = "main.html";
}

//Search button
searchBtn.onclick = function(event){
    console.log("Clicked Button");
    event.preventDefault();

   
    // New York Search Conditional
    if(input.value == "New York" || input.value == "new york"){
        searchNewYork();
    }


    //Miami Search Conditional
    if(input.value == "Miami" || input.value == "miami") {
        searchMiami();
    }

    //Boston Search Conditional
    if(input.value =="Boston" || input.value == "boston") {
        searchBoston();

    }

    // Los Angeles Search Conditional 
    if(input.value == "Los Angeles" || input.value == "los angeles") {
       searchLosAngeles();
    }

    // Seattle Search Conditional
    if(input.value == "Seattle" || input.value == "seattle") {
        searchSeattle();

    }

    // Denver Search Conditional 
    if(input.value == "Denver" || input.value == "denver") {
        searchDenver();

    }

    // San Fransisco Search Conditional
    if(input.value == 'San Francisco' || input.value == 'san francisco') {
        searchSanFrans();

    

    }

    // Atlanta Search Conditional    
    if(input.value == 'Atlanta' || input.value == 'atlanta') {
        searchAtlanta();

    }

    // Chicago Search Conditional    
    if(input.value == 'Chicago' || input.value == 'chicago') {
       searchChicago();

    
    }

    // Washington DC Search Conditional    
    if(input.value == 'Washington DC' || input.value == 'washington dc') {
        searchWashington();
    }



}

// Search  and API Fetch Function for New York

function searchNewYork(){
        
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

        fetch(newyorkurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
            // Name & Ranking 
            console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
            // Housing 
            console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
            //Safety
            console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });
}

// Search and API Fetch Function for Miami 
function searchMiami(){

        //Define Url 
        const miamiurl = "https://api.teleport.org/api/urban_areas/teleport:dhwfx/details/";

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

        fetch(miamiurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
            // Name & Ranking 
            console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
            // Housing 
            console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
            //Safety
            console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });

}

// Search and API Fetch function for Boston
function searchBoston(){
    
        //Define Url 
        const bostonurl = "https://api.teleport.org/api/urban_areas/teleport%3Adrt2z/details/";

        //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "none";
        miamiC.style.display = "none";
        bostonC.style.display = "flex";
        losC.style.display = "none";
        seattleC.style.display = "none";
        denverC.style.display = "none";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";

        fetch(bostonurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing 
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });
}

// Search and API Fetch Function for Los Angeles
function searchLosAngeles() {

    
    //Define Url 
    const losurl = "https://api.teleport.org/api/urban_areas/teleport%3A9q5ct/details/";
    
    //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "none";
        miamiC.style.display = "none";
        bostonC.style.display = "none";
        losC.style.display = "flex";
        seattleC.style.display = "none";
        denverC.style.display = "none";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";

        fetch(losurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
            // Name & Ranking 
            console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
            // Housing 
            console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
            //Safety
            console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });

}

//Search and API Fetch Function for Seattle 
function searchSeattle() {
    
    //Define Url 
    const seattleurl = "https://api.teleport.org/api/urban_areas/teleport%3Ac23nb/details/";

     //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "none";
        miamiC.style.display = "none";
        bostonC.style.display = "none";
        losC.style.display = "none";
        seattleC.style.display = "flex";
        denverC.style.display = "none";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";

        fetch(seattleurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });

}


//Search and API Fetch Function for Denver
function searchDenver() {

    //Define Url 
    const denverurl = "https://api.teleport.org/api/urban_areas/teleport%3A9xj65/details/";

     //Display changes from none to block, while the rest will be turn into none
        newyorkC.style.display = "none";
        miamiC.style.display = "none";
        bostonC.style.display = "none";
        losC.style.display = "none";
        seattleC.style.display = "none";
        denverC.style.display = "flex";
        sanC.style.display = "none";
        atlantaC.style.display = "none";
        chicagoC.style.display = "none";
        washingtonC.style.display = "none";

        fetch(denverurl)
        .then(function(response){
            return response.json();
        })
        .then(function(cityJSON){
            console.log(cityJSON);
            // Education console.log:
            // Name & Rank
            // Note if anyone can code an error system where if there is an error we right N/A or something 
            console.log("N/A"); 
            // Housing 
            console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
            //Safety
            console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
        });

}

//Search and API Fetch Function for Sans Francisco
function searchSanFrans() {


    //Define Url 
    const sanurl = "https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/details/";
    
    //Display changes from none to block, while the rest will be turn into none
       newyorkC.style.display = "none";
       miamiC.style.display = "none";
       bostonC.style.display = "none";
       losC.style.display = "none";
       seattleC.style.display = "none";
       denverC.style.display = "none";
       sanC.style.display = "flex";
       atlantaC.style.display = "none";
       chicagoC.style.display = "none";
       washingtonC.style.display = "none";

       fetch(sanurl)
       .then(function(response){
           return response.json();
       })
       .then(function(cityJSON){
           console.log(cityJSON);
           // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing 
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
       });

}

//Search and API Fetch Function for Atlanta
function searchAtlanta() {

    //Define Url 
    const atlantaurl = "https://api.teleport.org/api/urban_areas/teleport%3Adjgzz/details/";

    //Display changes from none to block, while the rest will be turn into none
       newyorkC.style.display = "none";
       miamiC.style.display = "none";
       bostonC.style.display = "none";
       losC.style.display = "none";
       seattleC.style.display = "none";
       denverC.style.display = "none";
       sanC.style.display = "none";
       atlantaC.style.display = "flex";
       chicagoC.style.display = "none";
       washingtonC.style.display = "none";

       fetch(atlantaurl)
       .then(function(response){
           return response.json();
       })
       .then(function(cityJSON){
           console.log(cityJSON);
           // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing 
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
       });

}

//Search and API Fetch Function for Chicago
function searchChicago() {

    //Define Url 
    const chicagourl = "https://api.teleport.org/api/urban_areas/teleport%3Adp3wn/details/";
    
    //Display changes from none to block, while the rest will be turn into none
       newyorkC.style.display = "none";
       miamiC.style.display = "none";
       bostonC.style.display = "none";
       losC.style.display = "none";
       seattleC.style.display = "none";
       denverC.style.display = "none";
       sanC.style.display = "none";
       atlantaC.style.display = "none";
       chicagoC.style.display = "flex";
       washingtonC.style.display = "none";

       fetch(chicagourl)
       .then(function(response){
           return response.json();
       })
       .then(function(cityJSON){
           console.log(cityJSON);
           // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing 
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
       });

}

//Search and API Fetch Function for Washington
function searchWashington() {

     //Define Url 
     const washingtonsurl = "https://api.teleport.org/api/urban_areas/teleport%3Adqcjq/details/";

    //Display changes from none to block, while the rest will be turn into none
       newyorkC.style.display = "none";
       miamiC.style.display = "none";
       bostonC.style.display = "none";
       losC.style.display = "none";
       seattleC.style.display = "none";
       denverC.style.display = "none";
       sanC.style.display = "none";
       atlantaC.style.display = "none";
       chicagoC.style.display = "none";
       washingtonC.style.display = "flex";

       fetch(washingtonsurl)
       .then(function(response){
           return response.json();
       })
       .then(function(cityJSON){
           console.log(cityJSON);
           // Education console.log:
           // Name & Ranking 
           console.log("University:",cityJSON.categories[6].data[16].string_value, " University Ranking:",cityJSON.categories[6].data[17].int_value);
           // Housing 
           console.log("Apt.-Rent Large:",cityJSON.categories[8].data[0].currency_dollar_value, "Apt.-Rent Medium:", cityJSON.categories[8].data[1].currency_dollar_value, "Apt.-Rent Small", cityJSON.categories[8].data[2].currency_dollar_value);
           //Safety
           console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[5].int_value);
       });

}
