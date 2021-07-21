/*responsive navigation */
const nav = document.querySelector('.menu');
const bt = document.querySelector('.drop');
bt.addEventListener('click', ()=>{nav.classList.toggle('responsive')}, false);

document.getElementById('year').innerHTML = new Date().getFullYear();
document.getElementById('update').innerHTML =  document.lastModified;
