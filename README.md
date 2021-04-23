# Everybody's Golf Coins and Gems Locator
## About
A tool for locating the holes that coins and gems appear on for each online golf course in the PS4 game <a href="https://store.playstation.com/en-us/product/UP9000-CUSA04687_00-EVERYBODYSGOLFUS" target="_blank">Everybody's Golf</a>

Demo available <a href="https://TheFabulousPika.github.io/everybodys-golf-coins-and-gems-locator/" target="_blank">here<a>

## Game logic
* There are a total of ten courses available for online play, including DLC. Each course is divided into two maps that contain either the "Out" (1-9) or "In" (10-18) holes.
Game items such as coins, gems, special golf balls, and warp medals will spawn in a certain hole's area on each map.
* If hole number N from the "Out" map has items on a certain day, the hole number N+10 on the corresponding "In" map will also have items. If N+10 goes over 18, the excess will be carried over from 10.

* The number of the hole with items will progress by 2 when moving down the courses in the list. When the highest hole number is reached for map type, the count will loop back to the beginning.

* The game uses Golf Island Time, which is the same as GMT. Lucky Chance is triggered at the top of the hour every two hours. The items we be reset when the day changes. The hole numbers with items will all increase by 1 on the next day.
