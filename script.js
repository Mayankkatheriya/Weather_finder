let form = document.querySelector("form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let citySearch = e.target.children[0].value

    apiKey = "3941fd682601558488781a9cd84dee5f";
    
    let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`)
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        let cityName = data.name;
        let desc = data["weather"]["0"]["description"];
        let temp = data.main.temp;
        let windSpeed = data.wind.speed
        console.log(cityName, desc, temp, windSpeed);
    })
    
})