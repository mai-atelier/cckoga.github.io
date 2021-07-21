const requestURL ="https://api.openweathermap.org/data/2.5/onecall?lat=33.7288&lon=130.4701&exclude=current&appid=8f806e2b6239d7e309c5ca0798079e25&units=metric"
fetch(requestURL)
.then((response)=>response.json())
.then((jsObject)=>{
    console.log(jsObject);
    // current weather //
    document.getElementById('humidity').textContent = jsObject.hourly[0].humidity;
    document.getElementById('temp').textContent = jsObject.hourly[0].temp.toFixed(1);
    document.getElementById('condition').textContent = jsObject.hourly[0].weather[0].description;


const imagesrc = `https://openweathermap.org/img/wn/${jsObject.hourly[0].weather[0].icon}.png`; 
const desc = jsObject.hourly[0].weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        document.querySelector('div.weathericon').appendChild(icon); 

    /*three days forecast*/
    function forecast() {
    const day1 = jsObject.daily[1];
    const day2 = jsObject.daily[2];
    const day3 = jsObject.daily[3];
    const item = [day1, day2, day3];
    console.log (item);
     

    function days (){
        const today = new Date()
        const d = today.getDay();
        const weekday = ['sun','mon','tue','wed','thu','fri','sat']; 
        

        for (let i = 0; i<item.length; i++){
    
            const threedays = weekday[(i+d) % weekday.length];
    
            const name =  document.createElement('div');
            name.className = 'dayname';
        
            const element = document.createElement('p');
            element.textContent = threedays;
    
            name.appendChild(element);
            document.querySelector('div.days').appendChild(name);
            console.log(threedays);
        }
    }  
       days ();

        item.forEach ( element => {

        const div =  document.createElement('div');
        div.className = 'dailyweather';

        const condition = document.createElement('p');
        condition.textContent = element.weather[0].description;

        const daytemp = document.createElement('p');
        daytemp.textContent = `${element.temp.day.toFixed(1)}°C`;
        
        const src = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`; 
        const cd =  condition;
        let icon = document.createElement('img');
        icon.setAttribute('src', src);  // focus on the setAttribute() method
        icon.setAttribute('alt', cd);
        div.append( icon, condition, daytemp);
        document.querySelector('div.weather').append(div);
    }); 

    }
    forecast();


      });




