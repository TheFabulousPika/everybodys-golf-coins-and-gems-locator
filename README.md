# Everybody's Golf Coins and Gems Locator

<img src="egbanner.jpg" />

## About
A tool for locating the holes that coins and gems appear on for each online golf course in the PS4 game <a href="https://store.playstation.com/en-us/product/UP9000-CUSA04687_00-EVERYBODYSGOLFUS" target="_blank">Everybody's Golf</a>

Demo available <a href="https://TheFabulousPika.github.io/everybodys-golf-coins-and-gems-locator/" target="_blank">here<a>

## Game logic
* There are a total of ten courses available for online play, including DLC. Each course is divided into two maps that contain either the "Out" (1-9) or "In" (10-18) holes.
Game items such as coins, gems, special golf balls, and warp medals will spawn in the area of a certain hole (henceforth "item hole") on each map.
* If hole N is the item hole on the "Out" map, the hole number N+10 on the corresponding "In" map will also be an item hole. If N+10 goes over 18, the count will restart from 10 with the excess being carried over.

* The item hole number will progress by 2 when moving down the courses in the list. If adding 2 to the previous item hole number will place the hole number over the maximum for the map type (i.e. 9 for "In" and 18 for "Out"), the count will loop back to the beginning with the excess being carried over.

* The game uses Golf Island Time, which is the same as GMT. Lucky Chance is triggered at the top of the hour every two hours. The items we be reset when the day changes. The hole numbers with items will all increase by 1 on the next day.
