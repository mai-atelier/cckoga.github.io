const requestURL = "cckoga.json"
fetch(requestURL)
.then ((response)=>response.json())
.then ((jsObject)=>{
//console.log(jsObject);//

const directory = jsObject['directory'];
for (let i = 0; i<directory.length; i++){
let h3 = document.createElement('h3');
h3.textContent = directory[i].name;

let industry = document.createElement('p');
industry.textContent = directory[i].industry;

let phone = document.createElement('p');
phone.textContent = directory[i].phone;

let link =　document.createElement('a');
let site = directory[i].weburl;
link.textContent = 'Visit Website';
link.setAttribute('href', site);

let div = document.createElement('div');
div.append(h3, industry, phone, link);
div.className = 'business';

let imgdiv = document.createElement('div');
imgdiv.className = "companylogo";
const img = document.createElement('img');
let imgurl = directory[i].imgurl;
img.setAttribute('src', imgurl);
img.setAttribute('alt',`${directory[i].name}logo`);
img.style.display = 'block';
imgdiv.appendChild(img);

let item = document.createElement('div');
item.className = 'item';
item.append(imgdiv, div);
document.querySelector('.directory').appendChild(item);
}
});

//view change//
const display = document.querySelector('div.directory');
const viewbt = document.querySelector('.cardview');
const listbt = document.querySelector('.listview');
//listbt.style.display = 'none';//

viewbt.addEventListener('click', () => {display.classList.add('cards');
viewbt.classList.add('activate');
listbt.classList.remove('activate');
});
/*viewbt.style.display = 'none';
listbt.style.display = 'block';*/


listbt.addEventListener('click', () => {display.classList.remove('cards');
listbt.classList.add('activate');
viewbt.classList.remove('activate');});
/*listbt.style.display = 'none';
viewbt.style.display = 'block';*/

