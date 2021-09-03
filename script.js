//global var

var saveButtonEl = $('.fa');

var today = moment().format("[Today is] dddd, MMMM Do YYYY, h:mm a");  
$('#currentDay').text(today);


//each timeblock is color coded to indicate whether it is in the past, present, or future

$('#9am').val(localStorage.getItem('9am'));
$('#10am').val(localStorage.getItem('10am'));
$('#11am').val(localStorage.getItem('11am'));
$('#12pm').val(localStorage.getItem('12pm'));
$('#1pm').val(localStorage.getItem('1pm'));
$('#2pm').val(localStorage.getItem('2pm'));
$('#3pm').val(localStorage.getItem('3pm'));
$('#4pm').val(localStorage.getItem('4pm'));
$('#5pm').val(localStorage.getItem('5pm'));


$('.time-block').each(function(i){
   var currentTime = moment().hours();
   var blockTime = i + 9;
   console.log(blockTime, currentTime)
   if (blockTime < currentTime) {
       $(this).children('#task').addClass('past')
   } else if (blockTime === currentTime){
    $(this).children('#task').addClass('present')
   } else if (blockTime > currentTime){
    $(this).children('#task').addClass('future')

   }
})


//save task to localStorage
saveButtonEl.on('click', TaskSave);

function TaskSave(event) {
    event.preventDefault();
  console.log('taskSave')
    var taskText = $(this).parent().siblings('#task').children('.description').val();
    var taskTime = $(this).parent().siblings('#time').text();
    localStorage.setItem(taskTime, taskText)
    console.log($(this))

}

  