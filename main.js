//Importing the 'dayjs' library, with plugins, then extending with plugin to get support for both
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);

//creating variable for drop down select 
const timeZoneDropdown = document.getElementById('timeZones');
//creating variable to handle displaying the time
const dateTimeDisplay = document.getElementById('clock');
//creating variable to handle displaying the list of time zone visited, history
const timezoneList = document.getElementById('time-zone-list');

//function that will handle getting the current time and displying it 
const updateTime = () => {
    //creating a variable to hold the the timezone selected in dropdown select
    const selectedTime = timeZoneDropdown.value;
    
    //creating a variable and assigning dayjs timezone, with a formatted time
    const currentTime = dayjs().tz(selectedTime).format('dddd, MMMM D, YYYY h:mm A');

    //changing the text content of variable to display timezone and time
    dateTimeDisplay.textContent = `${selectedTime} current time is ${currentTime}`

    //creating a new element for our list and adding the secection to the list
    const newItem = document.createElement('li');
    newItem.innerText = dateTimeDisplay.textContent;
    timezoneList.appendChild(newItem);
}

//function to handle the background color
const backgroundColor = () => {

    //creating a variable to hold the secetion from the dropdown select
    const selectedOption = timeZoneDropdown.options[timeZoneDropdown.selectedIndex];
    //creating a variable to hold the id of the selection from the dropdown
    const optionId = selectedOption.id;
    
    //if-else statments to change the backgrond and color of the font on the page
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

//creating a variable for the clear button from the document
const clearButton = document.getElementById('clear-button');

//function that will handle clearing the information
const clearResults = () =>{
    //setting the HTML to empty, clearing the list
    timezoneList.innerHTML = '';

    //setting the background to white, which is the default
    document.body.style.backgroundColor = 'white';

    //setting the font to black, which is the default
    document.getElementById('timeZone-lable').style = 'black';

    //setting the clock display to empty, which is the defaul
    dateTimeDisplay.textContent = '';
}

//adding an event lister waiting for the clear button to be clicked
clearButton.addEventListener('click', clearResults);

//event listner waiting for a selection from dropdown select, will run functions inside
timeZoneDropdown.addEventListener('change', () => {
    updateTime();
    backgroundColor();
});

//creating a function that gets timezone 
const getTimeZoneFromCoordinates = () => {
    //gets the local timezone from Intl.DateTimeFormat API
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

//creating an event listener for the location button 
document.getElementById('get-location-button').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            //getting the latitude and longitude from the position
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            
            //creating a variable and calling function
            const timezone = getTimeZoneFromCoordinates();

            //displaying the timeezone 
            // document.getElementById('clock').textContent = `Timezone ${timezone}`

            //using dayjs to handle the current loction timezone, formatting the time to be readable
            const currentTimeGeo = dayjs().tz(timezone).format('dddd, MMMM D, YYYY h:mm A');

            //displaying the timezone and the time in that zone
            dateTimeDisplay.textContent = `${timezone} current time is ${currentTimeGeo}`

            //changing the color of the lable font
            document.getElementById('timeZone-lable').style.color = 'black';

            //changing the color of the list font
            dateTimeDisplay.style.color = 'black';
            document.getElementById('time-zone-list').style.color = 'black';

            //changing the background color to white
            document.body.style.backgroundColor = 'white';

            //creating a new list element and adding to the list
            const newItem = document.createElement('li');
            newItem.innerText = dateTimeDisplay.textContent;
            timezoneList.appendChild(newItem);
        },
        //handling the error and displaying it to the console 
        (error) => {
            console.log('error', error);
        }
    );
});


//loading the content when the window loads 
window.onload = updateTime;