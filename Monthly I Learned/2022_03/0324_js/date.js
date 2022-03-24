let defaultDate = new Date('2022-03-23');
let today = new Date();
let dateDiff = Math.ceil((defaultDate.getTime()-today.getTime())/(1000*3600*24));


console.log(Math.abs(dateDiff))
console.log(today)