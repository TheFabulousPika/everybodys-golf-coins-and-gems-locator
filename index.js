function getDaysPassed() {
    const oneDayInMilliseconds = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let firstDateUTC = new Date(Date.UTC(2019,08,11));
    let currentDate = new Date();
    let diffDays = Math.floor(Math.abs((firstDateUTC.getTime() - currentDate.getTime())/(oneDayInMilliseconds)));
    return diffDays;
}
function getEagleCityOutItemHoleNumber(){
    let daysPassed = getDaysPassed();
    let remainder = daysPassed % 9;
    let EagleOutHoleNumber = 4 + remainder;
    return EagleOutHoleNumber;
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
function updateItemHolesInTable(){
    let eagleCityOutItemHoleNumber = Number(getEagleCityOutItemHoleNumber());
    let tdOut = document.getElementsByClassName("out");
    let tdIn = document.getElementsByClassName("in");
    for (var i = 0; i < tdOut.length; i++){
        let thisOutHoleNumber = (eagleCityOutItemHoleNumber + i*2) % 9;
        if (thisOutHoleNumber == 0){
            thisOutHoleNumber = 9;
        }
        var thisInHoleNumber = thisOutHoleNumber + 10;
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
    return golfIslandTime;
}
function addIconsToTable(){
    let tdIcon = document.getElementsByClassName("icon");
    for (var i = 0; i < tdIcon.length; i++){
        let bgURL = "url(" + "'icons/" + i + ".png')";
        tdIcon[i].style.backgroundImage = bgURL;
    }
}
