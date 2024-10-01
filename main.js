const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const timeZoneDropdown = document.getElementById('timeZones');
const dateTimeDisplay = document.getElementById('clock');
const timezoneList = document.getElementById('time-zone-list');

const updateTime = () => {
    const selectedTime = timeZoneDropdown.value;
    
    const currentTime = dayjs().tz(selectedTime).format('dddd, MMMM D, YYYY h:mm A');

    dateTimeDisplay.textContent = `${selectedTime} current time is ${currentTime}`

    const newItem = document.createElement('li');
    newItem.innerText = dateTimeDisplay.textContent;
    timezoneList.appendChild(newItem);
}

const backgroundColor = () => {
    const selectedOption = timeZoneDropdown.options[timeZoneDropdown.selectedIndex];
    const optionId = selectedOption.id;
    
    if(optionId == 'africa'){
        document.body.style.backgroundColor = 'red';
        document.getElementById('clock').style.color = 'white';
        document.getElementById('timeZone-lable').style.color = 'white';
        document.getElementById('time-zone-list').style.color = 'white';
    }else if(optionId == 'america'){
        document.body.style.backgroundColor = 'blue';
        document.getElementById('clock').style.color = 'white';
        document.getElementById('timeZone-lable').style.color = 'white';
        document.getElementById('time-zone-list').style.color = 'white';
    }else if(optionId == 'asia'){
        document.body.style.backgroundColor = 'yellow';
        document.getElementById('clock').style.color = 'black';
        document.getElementById('timeZone-lable').style.color = 'black';
        document.getElementById('time-zone-list').style.color = 'black';
    }else if(optionId == 'australia'){
        document.body.style.backgroundColor = 'purple';
        document.getElementById('clock').style.color = 'black';
        document.getElementById('timeZone-lable').style.color = 'black';
        document.getElementById('time-zone-list').style.color = 'black';
    }else if(optionId == 'europe'){
        document.body.style.backgroundColor = 'green';
        document.getElementById('clock').style.color = 'black';
        document.getElementById('timeZone-lable').style.color = 'black';
        document.getElementById('time-zone-list').style.color = 'black';
    }else if(optionId == 'pacific'){
        document.body.style.backgroundColor = 'orange';
        document.getElementById('clock').style.color = 'black';
        document.getElementById('timeZone-lable').style.color = 'black';
        document.getElementById('time-zone-list').style.color = 'black';
    }
}

const clearButton = document.getElementById('clear-button');

const clearResults = () =>{
    timezoneList.innerHTML = '';
    document.body.style.backgroundColor = 'white';
    document.getElementById('timeZone-lable').style = 'black';
    dateTimeDisplay.textContent = '';
}

clearButton.addEventListener('click', clearResults);

timeZoneDropdown.addEventListener('change', () => {
    updateTime();
    backgroundColor();
});

const getTimeZoneFromCoordinates = (lat, long) => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the local timezone directly
};


document.getElementById('get-location-button').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            
            const timezone = getTimeZoneFromCoordinates(lat, long);

            document.getElementById('clock').textContent = `Timezone ${timezone}`

            const currentTimeGeo = dayjs().tz(timezone).format('dddd, MMMM D, YYYY h:mm A');

            dateTimeDisplay.textContent = `${timezone} current time is ${currentTimeGeo}`

            dateTimeDisplay.style.color = 'black';
            document.getElementById('time-zone-list').style.color = 'black';

            const newItem = document.createElement('li');
            newItem.innerText = dateTimeDisplay.textContent;
            timezoneList.appendChild(newItem);
        },
        (error) => {
            console.log('error', error);
        }
    );
});



window.onload = updateTime;