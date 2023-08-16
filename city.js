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

// City Array 
let cityarray = ["New York", "Miami", "Boston", "Los Angeles", "Seattle", "Denver", "San Francisco", "Atlanta", "Chicago", "Washington DC"];

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
    location.href = "index.html";
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


//Reference to Div inside the city container
let newyork_div = document.getElementById("newyork_div");
let miami_div = document.getElementById("miami_div");
let boston_div = document.getElementById("boston_div");
let los_div = document.getElementById("losangeles_div");
let seattle_div = document.getElementById("seattle_div");
let denver_div = document.getElementById("denver_div");
let sanfran_div = document.getElementById("sanfran_div");
let atlanta_div = document.getElementById("atlanta_div");
let chicago_div = document.getElementById("chicago_div");
let washington_div = document.getElementById("washington_div");

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
            console.log("Gun Death Rate:", cityJSON.categories[16].data[1].int_value, "Gun Ownership Rate:", cityJSON.categories[16].data[3].int_value);

            // Creating a div inside newyork_div
            let educationDiv = document.createElement("div");
            newyork_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[0];
            educationDiv.appendChild(education_h1);

            //University Data
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value


            //Housing
            let housingDiv = document.createElement("div");
            newyork_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[0];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);


            //Safety Div 
            let safetyDiv = document.createElement("div");
            newyork_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[0];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);

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
        
            // Creating a div inside
            let educationDiv = document.createElement("div");
            miami_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[1];
            educationDiv.appendChild(education_h1);


            //University 
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

            //Housing
            let housingDiv = document.createElement("div");
            miami_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[0];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);

            //Safety Div 
            let safetyDiv = document.createElement("div");
            miami_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[1];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);

            
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
        
            // Creating a div inside
            let educationDiv = document.createElement("div");
            boston_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[2];
            educationDiv.appendChild(education_h1);


            //University 
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

            //Housing
            let housingDiv = document.createElement("div");
            boston_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[2];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);
            

            //Safety Div 
            let safetyDiv = document.createElement("div");
            boston_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[2];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);            
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
            
            // Creating a div inside
            let educationDiv = document.createElement("div");
            LosAngeles_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[3];
            educationDiv.appendChild(education_h1);


            //University 
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

            //Housing
            let housingDiv = document.createElement("div");
            LosAngeles_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[3];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);
    
            
            //Safety Div 
            let safetyDiv = document.createElement("div");
            LosAngeles_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[3];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
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
        
            // Creating a div inside
            let educationDiv = document.createElement("div");
            seattle_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[4];
            educationDiv.appendChild(education_h1);


            //University 
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

            //Housing
            let housingDiv = document.createElement("div");
            seattle_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[4];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);

            
            //Safety Div 
            let safetyDiv = document.createElement("div");
            seattle_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[4];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
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
        
            // Creating a div inside
            let educationDiv = document.createElement("div");
            denver_div.appendChild(educationDiv);

            // Creating a header saying Education in the city number in the array
            let education_h1 = document.createElement("h1");
            education_h1.innerHTML = "Education in " + cityarray[5];
            educationDiv.appendChild(education_h1);


            //University 
            let educationH = document.createElement("h2");
            educationH.innerHTML = "University: N/A"
            educationDiv.appendChild(educationH);
            // Ranking
            let educationRank = document.createElement("h2");
            educationRank.innerHTML = "Ranked: N/A"
            educationDiv.appendChild(educationRank);
            // PISA Math Mean
            let pisamath = document.createElement("h2");
            pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
            // PISA Reading Mean
            let pisaread = document.createElement("h2");
            pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
            // PISA Science Mean
            let pisasci = document.createElement("h2");
            pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

            //Housing
            let housingDiv = document.createElement("div");
            denver_div.appendChild(housingDiv);

            //Creating Header
            let housing_h1 = document.createElement("h1");
            housing_h1.innerHTML = "Housing Cost in " + cityarray[5];
            housingDiv.appendChild(housing_h1);

            //Housing Data
            // Large
            let housingL = document.createElement("h2");
            housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
            housingDiv.appendChild(housingL)
            // Medium
            let housingM = document.createElement("h2");
            housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
            housingDiv.appendChild(housingM);
            // Small
            let housingS = document.createElement("h2");
            housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
            housingDiv.appendChild(housingS);

            
            //Safety Div 
            let safetyDiv = document.createElement("div");
            denver_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[5];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
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
       
           // Creating a div inside
           let educationDiv = document.createElement("div");
           SanFrans_div.appendChild(educationDiv);

           // Creating a header saying Education in the city number in the array
           let education_h1 = document.createElement("h1");
           education_h1.innerHTML = "Education in " + cityarray[6];
           educationDiv.appendChild(education_h1);


           //University 
           let educationH = document.createElement("h2");
           educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
           educationDiv.appendChild(educationH);
           // Ranking
           let educationRank = document.createElement("h2");
           educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
           educationDiv.appendChild(educationRank);
           // PISA Math Mean
           let pisamath = document.createElement("h2");
           pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
           // PISA Reading Mean
           let pisaread = document.createElement("h2");
           pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
           // PISA Science Mean
           let pisasci = document.createElement("h2");
           pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

           //Housing
           let housingDiv = document.createElement("div");
           sanFrans_div.appendChild(housingDiv);

           //Creating Header
           let housing_h1 = document.createElement("h1");
           housing_h1.innerHTML = "Housing Cost in " + cityarray[6];
           housingDiv.appendChild(housing_h1);

           //Housing Data
           // Large
           let housingL = document.createElement("h2");
           housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
           housingDiv.appendChild(housingL)
           // Medium
           let housingM = document.createElement("h2");
           housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
           housingDiv.appendChild(housingM);
           // Small
           let housingS = document.createElement("h2");
           housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
           housingDiv.appendChild(housingS);

            //Safety Div 
            let safetyDiv = document.createElement("div");
            sanFrans_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[6];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
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
       
                   // Creating a div inside
           let educationDiv = document.createElement("div");
           atlanta_div.appendChild(educationDiv);

           // Creating a header saying Education in the city number in the array
           let education_h1 = document.createElement("h1");
           education_h1.innerHTML = "Education in " + cityarray[7];
           educationDiv.appendChild(education_h1);


           //University 
           let educationH = document.createElement("h2");
           educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
           educationDiv.appendChild(educationH);
           // Ranking
           let educationRank = document.createElement("h2");
           educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
           educationDiv.appendChild(educationRank);
           // PISA Math Mean
           let pisamath = document.createElement("h2");
           pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
           // PISA Reading Mean
           let pisaread = document.createElement("h2");
           pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
           // PISA Science Mean
           let pisasci = document.createElement("h2");
           pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

           //Housing
           let housingDiv = document.createElement("div");
           atlanta_div.appendChild(housingDiv);

           //Creating Header
           let housing_h1 = document.createElement("h1");
           housing_h1.innerHTML = "Housing Cost in " + cityarray[7];
           housingDiv.appendChild(housing_h1);

           //Housing Data
           // Large
           let housingL = document.createElement("h2");
           housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
           housingDiv.appendChild(housingL)
           // Medium
           let housingM = document.createElement("h2");
           housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
           housingDiv.appendChild(housingM);
           // Small
           let housingS = document.createElement("h2");
           housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
           housingDiv.appendChild(housingS);

           
            //Safety Div 
            let safetyDiv = document.createElement("div");
            atlanta_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[7];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
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
       
           // Creating a div inside
           let educationDiv = document.createElement("div");
           chicago_div.appendChild(educationDiv);

           // Creating a header saying Education in the city number in the array
           let education_h1 = document.createElement("h1");
           education_h1.innerHTML = "Education in " + cityarray[8];
           educationDiv.appendChild(education_h1);


           //University 
           let educationH = document.createElement("h2");
           educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
           educationDiv.appendChild(educationH);
           // Ranking
           let educationRank = document.createElement("h2");
           educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
           educationDiv.appendChild(educationRank);
           // PISA Math Mean
           let pisamath = document.createElement("h2");
           pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
           // PISA Reading Mean
           let pisaread = document.createElement("h2");
           pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
           // PISA Science Mean
           let pisasci = document.createElement("h2");
           pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value
           
           //Housing
           let housingDiv = document.createElement("div");
           chicago_div.appendChild(housingDiv);

           //Creating Header
           let housing_h1 = document.createElement("h1");
           housing_h1.innerHTML = "Housing Cost in " + cityarray[8];
           housingDiv.appendChild(housing_h1);

           //Housing Data
           // Large
           let housingL = document.createElement("h2");
           housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
           housingDiv.appendChild(housingL)
           // Medium
           let housingM = document.createElement("h2");
           housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
           housingDiv.appendChild(housingM);
           // Small
           let housingS = document.createElement("h2");
           housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
           housingDiv.appendChild(housingS);

           
            //Safety Div 
            let safetyDiv = document.createElement("div");
            chicago_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[8];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);

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
       
           // Creating a div inside
           let educationDiv = document.createElement("div");
           washington_div.appendChild(educationDiv);

           // Creating a header saying Education in the city number in the array
           let education_h1 = document.createElement("h1");
           education_h1.innerHTML = "Education in " + cityarray[8];
           educationDiv.appendChild(education_h1);


           //University 
           let educationH = document.createElement("h2");
           educationH.innerHTML = "University: " + cityJSON.categories[6].data[16].string_value;
           educationDiv.appendChild(educationH);
           // Ranking
           let educationRank = document.createElement("h2");
           educationRank.innerHTML = "Ranked: " + cityJSON.categories[6].data[17].int_value;
           educationDiv.appendChild(educationRank);
           // PISA Math Mean
           let pisamath = document.createElement("h2");
           pisamath.innerHTML = "PISA Math Mean: " + cityJSON.categories[6].data[3].float_value
           // PISA Reading Mean
           let pisaread = document.createElement("h2");
           pisaread.innerHTML = "PISA Reading Mean: " + cityJSON.categories[6].data[6].float_value
           // PISA Science Mean
           let pisasci = document.createElement("h2");
           pisasci.innerHTML = "PISA Science Mean: " + cityJSON.categories[6].data[9].float_value

           //Housing
           let housingDiv = document.createElement("div");
           washington_div.appendChild(housingDiv);

           //Creating Header
           let housing_h1 = document.createElement("h1");
           housing_h1.innerHTML = "Housing Cost in " + cityarray[9];
           housingDiv.appendChild(housing_h1);

           //Housing Data
           // Large
           let housingL = document.createElement("h2");
           housingL.innerHTML = "Apartment-Rent Large: $" + cityJSON.categories[8].data[0].currency_dollar_value;
           housingDiv.appendChild(housingL)
           // Medium
           let housingM = document.createElement("h2");
           housingM.innerHTML = "Apartment-Rent Medium: $" + cityJSON.categories[8].data[1].currency_dollar_value;
           housingDiv.appendChild(housingM);
           // Small
           let housingS = document.createElement("h2");
           housingS.innerHTML = "Apartment-Rent Small: $" + cityJSON.categories[8].data[2].currency_dollar_value;
           housingDiv.appendChild(housingS);

           
            //Safety Div 
            let safetyDiv = document.createElement("div");
            washington_div.appendChild(safetyDiv)

            //Safety
            let safety_h1 = document.createElement("h1");
            safety_h1.innerHTML = "Safety in " + cityarray[9];
            safetyDiv.appendChild(safety_h1);
            //Safety Data
            //Gun Death Rate
            let safetyD = document.createElement("h2");
            safetyD.innerHTML = "Gun-Death-Rate: " + cityJSON.categories[16].data[1].int_value;
            safetyDiv.appendChild(safetyD);
            //Gun Ownership Rate 
            let safetyG = document.createElement("h2");
            safetyG.innerHTML = "Gun-Ownership-Rate: " + cityJSON.categories[16].data[3].int_value;
            safetyDiv.appendChild(safetyG);
        });

}
