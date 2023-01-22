console.log('hello world!');
let element = document.querySelectorAll("li");


const eventName = document.querySelector("#eventName");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const orderList = document.querySelector("#OrderList");
const conflitList= document.querySelector("#conflit");
const form = document.querySelector("#add");
const deletEventDiv= document.querySelector("#clearConFlit");
console.log(deletEventDiv);


let i = 0;
let allEvents = [];
let conflitArr=[];
//adding event on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation
  let startDate = new Date(startTime.value);
  let endDate = new Date(endTime.value);
  if (eventName.value === "") {
    alert("Please Enter the Event name");
    return;
  } else if (!startTime.value) {
    alert("Please Enter the Start Date");
    return;
  } else if (!endTime.value) {
    alert("Please Enter the End Date");
    return;
  } else if (startDate > endDate) {
    alert("Start date is big than End Date");
    return;
  }

  //pushing value allEvents from input
  allEvents.push({
    id: i,
    event: eventName.value,
    startTime: startTime.value,
    endDate: endTime.value,
  });

  //sorting allEvents by date;
  allEvents.sort(function (a, b) {
    return new Date(a.startTime) - new Date(b.startTime);
  });



  
// new conflit checker 

let newEventStartDate= new Date(startTime.value);
let newEventEndDate =  new Date(endTime.value);
  function indexChecker(arr,id){
      for(let i=0;i<arr.length;i++){
          if(arr[i]['id']===id){
              return i;
          }
      }
  }

  let newEventIndex=indexChecker(allEvents,i);
  console.log(newEventIndex);

  // let check upper side event conflit
 if (newEventIndex > 0) {
   for (let i = newEventIndex-1; i >= 0; i--) {
       console.log('let check upper side event conflt');
      let eventEndDate = new Date(allEvents[i]["endDate"]);
     if (newEventStartDate<eventEndDate) {    
      conflitArr.push(allEvents[i]);
     }
   }
 } 
 console.log(conflitArr);
  // End check upper side event conflit

  // let check Down side event conflit
if((allEvents.length-1)>newEventIndex){
    for(let i=newEventIndex+1;i<allEvents.length;i++){
      let eventStartDate = new Date(allEvents[i]["startTime"]);
      console.log('let check Down side event conflt');
        if(newEventEndDate> eventStartDate){
          conflitArr.push(allEvents[i]);
        }
    }
}

console.log(conflitArr);

if(conflitArr.length>0){
  conflitList.innerHTML='';
  deletEventDiv.innerHTML=`<button id="deleteOldEvent" class="btn" >Delete Old Event</button>
<button id="deleteNewEvent" class="btn" >Delete New Event</button>`;
   //maping of conflitevent
   conflitArr.map((items) => {
    let eventName= items["event"];
    let startDate= items["startTime"];
    let endDate =  items["endDate"];
  const newInerHtml =`<span class="text">${eventName}</span>
  <span class="text">From : ${startDate}</span>
    <span class="text">To : ${endDate}</span>
  `;
  
  

  const newelement = document.createElement("li");
  newelement.innerHTML = newInerHtml;
  conflitList.append(newelement);
  
});

return ;

}


  // new end conflit checker 





  orderList.innerHTML = "";
  //maping of allEvents
  allEvents.map((items) => {
      let eventName= items["event"];
      let startDate= items["startTime"];
      let endDate =  items["endDate"];
    const newInerHtml =`<span class="text">${eventName}</span>
    <span class="text">From : ${startDate}</span>
      <span class="text">To : ${endDate}</span>
    `;
    
    
 
    const newelement = document.createElement("li");
    newelement.innerHTML = newInerHtml;
    orderList.append(newelement);
  });
  //maping end of allEvents

  


//   //confilt check
//   if (allEvents.length > 1) {
//     let confiltArr = [];

//     for (let i = 0; i < allEvents.length - 1; i++) {
//       //console.log(allEvents[i+1]['startTime'])
//       let nextEventStartDate = new Date(allEvents[i + 1]["startTime"]);
//       let eventEndDate = new Date(allEvents[i]["endDate"]);
//       if (nextEventStartDate < eventEndDate) {
//         confiltArr.push(allEvents[i]["id"]);
//       }
//     }


//     if (confiltArr.length > 0) {
//       alert("conflit Occur");
//     }
//   }
//   //confilt check End

  //set null aftr appendig data all inputs
  eventName.value = "";
  startTime.value = "";
  endTime.value = "";
  i++;
});




