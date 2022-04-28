// https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/

let timer_ID = "timer-count";
var one_day = 1000 * 60 * 60 * 24

let currentDate = new Date();
let endDate = new Date(2022, 6, 04)

let time_left = endDate.getTime() - currentDate.getTime();
let days_left = Math.ceil(time_left / (1000 * 3600 * 24))

document.getElementById(timer_ID).innerHTML = days_left;