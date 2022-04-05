# Plan Section To Do

* Implement a Documentation box for plant families and colors.
* Implement an Observations card inside of plant popup.
* Request more Observations from Jenna
* Need flavor outcome data.
* Dynamically generate outcome star fields and values from the outcome object.
* Need a vendor collection 
* Add startType (direct seed, greenhouse, starter) to Card description 
* Think about dropdown for year, bed, planting. Then top-level tabs are By Year, By Bed, By Plant.

* Plant History Tab
  * We have a plantID. (Not always, actually).
  * Given a plantID, we must generate the data structure:
  * [
  * { 
  *     year: <year>,
  *     beds: [ { bedID: <bedID>, month thingy?]
  * },
  * {  year: <year>, beds: [ bedInfo] }
  * ]Then display years (reverse chronological order), bedIDs, and PlantRows.
