const requestURL = "cckoga.json"
fetch(requestURL)
.then ((response)=>response.json())
.then ((jsObject)=>{
    const transition = jsObject['population.transition'];
for (let i = 0; i<transition.length; i++){
    
let year = document.createElement('span');
year.textContent = transition.year;
let axis = document.createElement('div');
axis.appendChild(year);
}
});