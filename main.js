const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

const timeZoneDropdown = document.getElementById('timeZones');
const dateTimeDisplay = document.getElementById('clock');

const updateTime = () => {
    const selectedTime = timeZoneDropdown.value;
    
    const currentTime = dayjs().tz(selectedTime).format('dddd, MMMM D, YYYY h:mm A');

    dateTimeDisplay.textContent = `${selectedTime} current time is ${currentTime}`

    const timezoneList = document.getElementById('time-zone-list');
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

timeZoneDropdown.addEventListener('change', () => {
    updateTime();
    backgroundColor();
});

window.onload = updateTime;