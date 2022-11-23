$(document).ready(function(){
var time = moment().hours();
var textEl = $('.description');
var saveBtns = $('.saveBtn');

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
    }
}
//Adds an event to the save button and saves the values to local storage
    $('.saveBtn').on('click', function(){
        var value = $(this).siblings('.description').val();
        var key = $(this).siblings('.description').attr('id');
        localStorage.setItem(key, value);
    });
    
    //displays the local storage value
    for(var num = 9; num <= 17; num++){
        $("textarea#" + num).text(localStorage.getItem(num));
    }
});