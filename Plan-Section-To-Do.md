# Plan Section To Do

* Implement a Documentation box for plant families and colors.
* Implement an Observations card inside of plant popup.
* Request more Observations from Jenna
* Need flavor outcome data.
* Dynamically generate outcome star fields and values from the outcome object.
* Need a vendor collection 
* Add startType (direct seed, greenhouse, starter) to Card description 
* Think about dropdown for year, bed, planting. Then top-level tabs are By Year, By Bed, By Plant.

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
        
## Revised Timeline structure:

* Top Level Tabs:  By Year, By Bed, By Plant.
* When you click the tab, you get two rows:
  * Row 1:  The selector: Select a Year, A Bed, or a Plant
  * Row 2:  When the selected element is not null, then displays a Timeline

* The timeline always has the following four rows in this order
  * Year 
  * Bed
  * Plant
  * Calendar

* And plantHistory will always return a structure like this:

```js
[
  {
   year: "2020",
   bedData: [
     {
       bed: "01",
       plantingData: [
         { plantingdata }
       ]
     }
   ] 
  }
]
```

All that changes is:
* By Year:  only one entry for the specified year.
* By Bed: The bed value will always be the selected bed.
* By Plant:  The plantingdata will always refer to the selected plantID.
* We start by getting all of the data for the selected year, bed, or plantID, then organizing it appropriately for display.

The layout of the "return value" is fixed and consistent.

All that changes for the different tabs is:
* The selector
* The function called to get the history data to display.

Structure:
* Row 1: Selector.
* Row 2: Header
  * Year: p-0 col-1
  * Bed: p-0 col-1
  * Planting Data: p-0 col-10
    * Row
      * p-0 col-3: Plant Badge
      * p-0 col-9: Months
        * Row
          * p-0 col-1 X 12 = all 12 months. 
