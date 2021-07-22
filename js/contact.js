const requestURL = "cckoga.json"
fetch(requestURL)
.then ((response)=>response.json())
.then ((jsObject)=>{
//console.log(jsObject);

const directory = jsObject['directory'];
for (let i = 0; i<directory.length; i++){

let imgdiv = document.createElement('div');
imgdiv.className = "companylogo";

const img = document.createElement('img');
let imgurl = directory[i].imgurl;
img.setAttribute('src', imgurl);
img.setAttribute('alt',`${directory[i].name}logo`);
img.style.display = 'block';

const link = directory[i].webmgurl;
const a = document.createElement('a');
a.setAttribute('href', link);

a.appendChild(img);
imgdiv.appendChild(a);
let item = document.createElement('div');
item.className = 'logo2';
item.appendChild(imgdiv);
document.querySelector('.directory2').appendChild(item);
}
});
