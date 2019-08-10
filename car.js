//part 1
//object create
let arrayObject = [];

function consoletablemaker() {
    //object maker
    let car = {
        plate_number: document.getElementById("plate_number").value,
        car_maker: document.getElementById("car_maker").value,
        car_model: document.getElementById("car_model").value,
        car_price: document.getElementById("car_price").value,
        car_colour: document.getElementById("car_colour").value

    }

    arrayObject.push(car);
    //printing in console
    console.table(Object.entries(car))
    //discounted price
    let price = document.getElementById("car_price").value;

    if (price > 20000) {
        document.getElementById('ddis').innerHTML = price * 0.25;
    } else if (price < 5000) {
        document.getElementById('ddis').innerHTML = price * 0.1;
    } else {
        document.getElementById('ddis').innerHTML = price * 0.15;
    }

}
//search car by plate number function
function search() {
    let search = document.getElementById("search").value;
    let item = [];
    //looping through array of object and create an //array of each object and then check if it exists
    arrayObject.forEach(function (element) {
        let values = Object.values(element);
        if (values.indexOf(search) > -1) {
            item = element;
        }
    }, this);
    //finally, print the maker and model name
    document.getElementById('maker').innerHTML = item.car_model;
    document.getElementById('model').innerHTML = item.car_maker;
}