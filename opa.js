
//http://api.weatherapi.com/v1/current.json?key=1fad1826a6bb462abd1103705231403&q=London&aqi=no
const details = document.querySelector('.container2')
const cc = document.querySelector('.details-box')
const weatherContainer = document.querySelector('.weather-contaiiner')
const tempField = document.querySelector('.temp')
const locationField = document.querySelector('.time-location')
const timeLocation = document.querySelector('.time-location')
const weatherField = document.querySelector('.condition p')
const searchField = document.querySelector('.search-area')
const form = document.querySelector('form')
const  iconLogo = document.querySelector('.icon')


form.addEventListener('submit',setUpEvent )


let target = ''

const fetchResult = async (targetLocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=1fad1826a6bb462abd1103705231403&q=${targetLocation}&aqi=no`
    const resp = await fetch (url)
    const data = await resp.json()

    // console.log(data)



    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    let image = data.current.condition.icon



    upDateDetails(temp,locationName,time,condition, image)
}


function setUpEvent (e) {
    e.preventDefault();
    target = searchField.value
     fetchResult(target)

    if(searchField.length === 0){
        details.innerHTML = `
        <h3> Invalid Input❌</h3>
        `
    }else{
        details.style.display = 'block'
    }

    
     
 }



 function upDateDetails(temp, locationName, time, condition, image ) {

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]
    let currentDay = getDayName( new Date (splitDate).getDay())

    tempField.innerText = temp + '°C';
    locationField.innerText = locationName
    timeLocation.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    weatherField.innerText = condition;
    iconLogo.innerHTML = `
    <img src=${image}>

    `
    

    

    
    // iconLogo.innerHTML = image;






 }
     fetchResult(target)

 const getDayName = (number) => {
    switch(number){
        case 0 :
            return 'Sunday';
            case 1 :
            return 'Monday';
            case 2 :
            return 'Tuesday'
            case 3 :
            return 'Wednesday'
            case 4 :
            return 'Thursday'
            case 5 :
            return 'Friday'
            case 6 :
            return 'Saturday'
    }
 }








