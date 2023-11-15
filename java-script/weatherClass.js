export default class WeatherClass {

    constructor(_item, _parent) {
        this.name = _item.name;
        this.description = _item.weather[0].description;
        this.temp = _item.main.temp;
        this.feels_like = _item.main.feels_like;
        this.humidity = _item.main.humidity;
        this.icon = _item.weather[0].icon;
        this.parent = _parent;
    }

    render() {
        let myCard = document.createElement("div");
        myCard.className = "my_card shadow col-md-4 col-sm-9";
        myCard.innerHTML += `<div class="w-100 d-flex justify-content-between">
        <div><h2 class="fw-bold">${this.name}</h2>
        <p class="description">${this.description}</p></div>
        <img src="http://openweathermap.org/img/w/${this.icon}.png" alt="Weather Icon" width="60" height="60"/></div>`;
        myCard.innerHTML += ` <div class="info w-100 d-flex justify-content-between">
        <div class="info info_hearer">טמפ' נמדדת</div>
        <div class="info info_hearer">טמפ' מורגשת</div>
        <div class="info info_hearer">לחות</div></div>`
        myCard.innerHTML += `<div class="card-value w-100 d-flex justify-content-between fw-bold mb-3">
        <div class="info">${this.humidity}%</div>
        <div class="info">${this.feels_like}℃</div>
        <div class="info">${this.temp}℃</div>
        </div>`
        document.querySelector(this.parent).append(myCard);
    }
}