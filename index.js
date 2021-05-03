const lastSyncDateInGolfIslandTime = new Date(Date.UTC(yearChecked,monthChecked-1,dateChecked));

//Calculates the number of days passed since last synchronization
function getDaysPassed() {
    const oneDayInMilliseconds = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let firstDateUTC = lastSyncDateInGolfIslandTime;
    let currentDate = new Date();
    let diffDays = Math.floor(Math.abs((firstDateUTC.getTime() - currentDate.getTime())/(oneDayInMilliseconds)));
    return diffDays;
}

//Calculates the current item hole number for Eagle City Out map
function getItemHoleNumEagleCityOut(){
    let daysPassed = getDaysPassed();
    let remainder = daysPassed % 9; //9 days for a full cycle
    let itemHoleNumInit = Number(eagleCityOutItemHoleNum);
    let itemHoleNumEagleCityOut = itemHoleNumInit + remainder;
    return itemHoleNumEagleCityOut;
}

function initializeTable(){
    addIconsToTable();
    updateGolfIslandTime();
    updateItemHolesInTable();
}

function updateTable(){
    updateGolfIslandTime();
    updateItemHolesInTable();
} 
 
//Start with Eagle City Out, calculate item holes based on logic outlined in README.md
function updateItemHolesInTable(){
    let itemHoleNumEagleCityOut = Number(getItemHoleNumEagleCityOut());
    let tdOut = document.getElementsByClassName("out");
    let tdIn = document.getElementsByClassName("in");
    for (var i = 0; i < tdOut.length; i++){
        let thisOutHoleNumber = (itemHoleNumEagleCityOut + i*2) % 9;
        if (thisOutHoleNumber == 0){
            thisOutHoleNumber = 9;
        }
        let thisInHoleNumber = thisOutHoleNumber + 10;
        if (thisInHoleNumber > 18){
            thisInHoleNumber = thisInHoleNumber - 9;
        }
        tdOut[i].innerHTML = thisOutHoleNumber;
        tdIn[i].innerHTML = thisInHoleNumber;
    }  
}

function updateGolfIslandTime(){
    let tdGolfIslandTime = document.getElementById("islandtime");
    tdGolfIslandTime.innerHTML = getGolfIslandTime();
}

function getGolfIslandTime(){
    let golfIslandTime = new Date().toUTCString();
    return golfIslandTime.split("GMT")[0];
}

function addIconsToTable(){
    let tdIcon = document.getElementsByClassName("icon");
    for (var i = 0; i < tdIcon.length; i++){
        let bgURL = "url(" + "'icons/" + i + ".png')";
        tdIcon[i].style.backgroundImage = bgURL;
    }
}
