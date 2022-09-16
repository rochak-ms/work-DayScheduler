
//displaying the current date and time also creating lop to showing the office hours
$(function(){
  const currentDay = $("#currentDay");
  const container = $(".container");
  
  function startTimer(){
    
    setInterval(function(){
    //get the current date and time to be displayed on the header section
    currentDay.text(moment().format('dddd LL | hh:mm A'))

    }, 1000);
  }
  //User see the current date and time
  startTimer();

  for(let i = 8; i < 18; i++) {
    const timeCount = createTimeBlocks(i);
   
    container.append(timeCount);
  }
})

//creating TimeBlocks in html using JavaScript
function createTimeBlocks(time, content =''){  
        const timeMoment = moment(time, 'h');
        const timeBlock = $("<div class='row time-block'>");
        const colTime = $("<div class='col-2 hour'>").text(timeMoment.format('hh:00 A'));

        const colTextarea = $("<div class='col-9 textBox'>");
        const textArea = $("<textarea id='input' placeholder='Write something here..'>").val(content)

        // assigning color according to current, past and future time
        const currentTime = moment().hour();
        if(currentTime > time ){
            $(colTextarea).addClass('past');
        }
        else if(currentTime === time){
            $(colTextarea).addClass('present');
        }
        else{
          $(colTextarea).addClass('future');
        }
        colTextarea.append(textArea);
        
        //Creating button to save the input
        colButton = $("<button type='button' id='button' class='col-1 btn saveBtn btn-primary'>").append(saveBtn = $("<i class='fas fa-save'>"));

      
    return timeBlock.append(colTime, colTextarea, colButton, colButton);
}

