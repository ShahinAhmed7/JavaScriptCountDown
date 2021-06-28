const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2021, 5, 28, 11, 30, 0); //set deadline

const year = futureDate.getFullYear(); //get year
const hours = futureDate.getHours();  //get hours
const mins = futureDate.getMinutes(); //get mins

let month = futureDate.getMonth(); //get month
month = months[month]; //assign month

const date = futureDate.getDate(); //get day value
const weekday = weekdays[futureDate.getDay()]; //get and assign weekday

giveway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${year}, ${hours}: ${mins}am` ;
