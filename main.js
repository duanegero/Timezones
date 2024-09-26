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

}

timeZoneDropdown.addEventListener('change', updateTime);

window.onload = updateTime;