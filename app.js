const input= document.querySelector("#input");
const button= document.querySelector("#btn");
const temp= document.querySelector("#tepmreture");
const country= document.querySelector("#country");
const humidity= document.querySelector("#Humility")
const windSpeed= document.querySelector("#wind_Speed")

 async function getdata(city){
    const apikey= "7945d60ea15a3189fa4e02728c6f524c"
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const weather=  await fetch(url).then((response)=>response.json())
    temp.innerHTML= `${Math.floor((weather.main.temp-273.15))}.C`
    country.innerHTML= `${weather.name}`
    humidity.innerHTML= `${weather.main.humidity}%`
    windSpeed.innerHTML= `${weather.wind.speed}km/h`
    console.log(weather)



}
button.addEventListener('click',()=>{
   getdata(input.value)
})