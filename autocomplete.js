let suggestedPlaces = [
    'New York',
    'Miami',
    'Seattle',
    'Chicago',
    'Los Angeles',
    'Boston',
    'Denver',
    'San Francisco',
    'Atlanta',
    'Washington DC'
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup =function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = suggestedPlaces.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick =selectInput(this)>" + list + "</list>";
    });

    resultsBox.innerHTML = "<ul>"+ content.join('') + ' </ul>';
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}