document.addEventListener('DOMContentLoaded',function(){
 const monthYear=document.getElementById('monthyear');
 const dayscontainer=document.getElementById("days");
 const prevbutton=document.getElementById('prev');
 const nextButton = document.getElementById('next');
 
 const months=['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

let currentDate=new Date();
let today=new Date();

function rendercalender(date){
    const year=date.getFullYear();
    const month=date.getMonth();
    const firstday=new Date(year,month,1).getDay();
    const lastday=new Date(year,month+1,0).getDate();
    monthYear.textContent = `${months[month]} ${year}`;
    dayscontainer.innerHTML="";

    //previous month dates
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstday; i > 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = prevMonthLastDay - i + 1;
        dayDiv.classList.add('fade');
        dayscontainer.appendChild(dayDiv);
    }

    //current month's dates
    for (let i=1;i<=lastday;i++){
        const  daydiv=document.createElement('div');
        daydiv.textContent=i;

        if(i=== today.getDate() && month===today.getMonth() && year===today.getFullYear()){
            daydiv.classList.add('today');
        }
        dayscontainer.appendChild(daydiv);
    }


    // Next month's dates
    const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
    for (let i = 1; i <= nextMonthStartDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.classList.add('fade');
        dayscontainer.appendChild(dayDiv);
    }


}

prevbutton.addEventListener('click',function(){
    currentDate.setMonth(currentDate.getMonth()-1);
    rendercalender(currentDate);
});
nextButton.addEventListener('click', function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    rendercalender(currentDate);
});

rendercalender(currentDate);
});