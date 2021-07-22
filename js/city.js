const eventsURL = "cckoga.json"
fetch(eventsURL)
.then ((response)=>response.json())
.then ((jsObject)=>{

const events = jsObject['events'];
for (let i = 0; i<events.length; i++){

let name = document.createElement('h3');
name.textContent = events[i].name;

let date = document.createElement('p');
date.textContent = `${events[i].date} : ${events[i].time}`;

let place = document.createElement('p');
place.textContent = events[i].place;


let div2 = document.createElement('div');
div2.className = "overview";

let div3 = document.createElement('div');
div3.className = "content";

let div = document.createElement('div');
div.className = "eventitem2";

const img = document.createElement('img');
let imgurl = events[i].imgurl;
img.setAttribute('src', imgurl);
img.setAttribute('alt', name);
img.style.display = 'block';

div2.append(name,date,place);
div3.append(div2);
div.append(img,div3);
document.querySelector('.eventinfo').append(div);
}
});