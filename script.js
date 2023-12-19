const button = document.getElementById("search-button");
const input =document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const citytemp=document.getElementById("city-temp");
const cityTime=document.getElementById("city-time");
async function getData(cityName){
    const promise= await fetch(
        `http://api.weatherapi.com/v1/current.json?key=703304158ae04db5b78101933232710&q=${cityName}&aqi=no`
    );
    return await promise.json();
}
button.addEventListener('click',async ()=>{
    // alert(input.value);
    const value=input.value;
    const result =await getData(value);
    console.log(result);
    cityName.innerHTML=`${result.location.name}, ${result.location.country}`;
    citytemp.innerHTML=`Temp : ${result.current.temp_c} degree Celcius`;
    cityTime.innerHTML=result.location.localtime;
});     
