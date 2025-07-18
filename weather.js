const apiKey="bd0175599e6d4b93131bb03b9c11ee4d";
const button=document.getElementById("button");
const input=document.getElementById("cityInput");

async function getweather() {
    const cityname=input.value;
    console.log(cityname);
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`);
        const data=await response.json();
        document.getElementById("weatherresult").innerHTML+=`Temperature in ${data.name}: ${data.main.temp}*C. (Feels Like ${data.main.feels_like}*C)
        <br> Condition: ${data.weather[0].description}
        <br> Humidity: ${data.main.humidity}%
        <br> wind speed: ${data.wind.speed} <hr>` ;
    }
    catch(e){
        console.log(e);
        document.getElementById("weatherresult").innerHTML+=`No data available of ${cityname} or City Not Found<hr>`;

    }
}
button.addEventListener("click",getweather);
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        getweather();
    }
});