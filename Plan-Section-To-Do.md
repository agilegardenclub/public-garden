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


* Structure of BedHistory
  * Top level is a container with two rows:
    * Row 1: consisting of the Header
    * Row 2: Two columns:
      * Dropdown
      * SingleBedHistory
  * SingleBedHistory takes the bedID and returns a list of SingleBedYears
  * Each SingleBedYear is a Row with two columns:
    * The Year
    * A list of Rows, each containing a PlantRow
  * Each PlantRow is a row with two columns
    * The PlantBadge
    * The Calendar view

* Structure of PlantHistory
    * Top level is a container with two rows:
        * Row 1: consisting of the Header
        * Row 2: Two columns:
            * Dropdown
            * SinglePlantHistory
    * SinglePlantHistory takes the plantID and returns a list of SinglePlantYears
    * Each SinglePlantYear is a Row with two columns:
        * The Bed
        * A list of Rows, each containing a PlantRow
    * Each PlantRow is a row with two columns
        * The PlantBadge
        * The Calendar view
