function days_passed() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDateUTC = new Date(Date.UTC(2019,08,11));
    var secondDate = new Date();
    var diffDays = Math.floor(Math.abs((firstDateUTC.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}
function getEagleOutHoleNumber(){
    var daysPassed = days_passed();
    var remainder = daysPassed % 9;
    var EagleOutHoleNumber = 4 + remainder;
    return EagleOutHoleNumber;
}
function initializeTable(){
    addIcons();
    updateGolfIslandTime();
    updateItemHolesInTable();
}
function updateTable(){
    updateGolfIslandTime();
    updateItemHolesInTable();
}  
function updateItemHolesInTable(){
    var EagleOutHoleNumber = Number(getEagleOutHoleNumber());
    var tdOut = document.getElementsByClassName("out");
    var tdIn = document.getElementsByClassName("in");
    for (var i = 0; i < tdOut.length; i++){
        var thisOutHoleNumber = (EagleOutHoleNumber + i*2) % 9;
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
    var tdGolfIslandTime = document.getElementById("islandtime");
    tdGolfIslandTime.innerHTML = golfIslandTime();
}
function golfIslandTime(){
    var golfIslandTime = new Date().toUTCString();
    return golfIslandTime;
}
function addIcons(){
    var tdIcon = document.getElementsByClassName("icon");
    for (var i = 0; i < tdIcon.length; i++){
        var bgURL = "url(" + "'icons/" + i + ".png')";
        tdIcon[i].style.backgroundImage = bgURL;
    }
}
