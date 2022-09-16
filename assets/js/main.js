// display date and time in header 
var currentDay = moment().format('dddd LL | hh:mm A');
$("#currentDay").append(currentDay);

// view the TimeBlocks for the day
var timeMoment = moment().startOf('day').add(7, 'hour');
var hour = moment().format('H');

// console.log(timeMoment);
// console.log(hour);


for(var i = 8; i < 18; i++) {
  var timeSlot = timeMoment.add(1, 'hour').format('hh:00 A');
  var blockTime;
// color coding the time blocks indicating if the current time for input is past = grey , present = red, future = green
if (hour == i) {
  blockTime = 'present';
} else if (hour > i) {
  blockTime = 'future';
} else if (hour < i) {
  blockTime = 'past';
}

// <!-- Creating time blocks -->
var newEl = 
`<div class='row time-block' id='time-block-${i}''>
  <div class='col-2 hour'>${timeSlot}</div>
    <textarea class='col-9 ${blockTime} description hour-${i}'
      placeholder='Write something here...'>
    </textarea>
    <button type="button" class="col-1 btn saveBtn btn-primary fas fa-save">
    </button>
</div>`;

$('.container').append(newEl);

}

//storing the input into the local storage in their respective time-block
$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});


//retrieving the data from local storage 
for (var i = 8; i < 18; i++) {
  $(`.time-block-${i}`).val(localStorage.getItem(`time-block-${i}`));
}