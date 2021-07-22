const eventsURL = "cckoga.json"
fetch(eventsURL)
.then ((response)=>response.json())
.then ((jsObject)=>{

const events = jsObject['events'];
for (let i = 1; i<4; i++){

let name = document.createElement('h3');
name.textContent = events[i].name;

let div = document.createElement('div');
div.className = "eventitem";

const img = document.createElement('img');
let imgurl = events[i].imgurl;
img.setAttribute('src', imgurl);
img.setAttribute('alt', name);
img.style.display = 'block';

div.append(img,name);
document.querySelector('.events').appendChild(div);
}
});