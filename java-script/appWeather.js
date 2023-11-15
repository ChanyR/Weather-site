import weatherClassModule from "./weatherClass.js"

let citys_arr = ["Eilat", "London", "New York", "Alaska"]
let weather;
let apiKey="8f9306389cee3cfe10f23d76d4d28b64";
// let apiKey = "8ee633956bad6ae1965b557a94ecfcba";

window.onload = function () {
    updateDateTime();
    createAllWeathersCards();
}

function createAllWeathersCards() {
    citys_arr.forEach(city => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=he&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                weather = new weatherClassModule(data, "#id_parent");
                weather.render();
            })
            .catch((err) => console.log(err));
    })
}

function updateDateTime() {
    const currentDate = new Date();

    const dateOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateOptions);

    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedTime = currentDate.toLocaleTimeString('en-GB', timeOptions);

    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    document.getElementById('id_date').textContent = formattedDateTime;
}