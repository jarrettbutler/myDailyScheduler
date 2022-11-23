var time = moment().hours();
var textEl = $('.description')
var saveBtn = $('.btn')
var updateCLock = ''
var i = 0


//Making the date and time appear while updating every second
setInterval(function(){
var today = dayjs().month(10);
$('#currentDay').text(today);
},1000)

//for loop to change the CSS of the element
for(i=0; i<textEl.length; i++){
    //puts the id of each time slot into an array that equals a number
    var timeSlots = Number(textEl[i].id);
    if(timeSlots===time){
        textEl[i].classList.add('present');
    } else if(timeSlots>time){
        textEl[i].classList.add('future');
    } else {
        textEl[i].classList.add('past');
    }}

    
