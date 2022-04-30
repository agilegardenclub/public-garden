# Philip's To Do List.

## Plant Summary Panel

TODO
* Make outcomeInfo constructor accept a chapter ID. 

Outcomes
* Germination, Appearance, Yield, Pest Resistance, Disease Resistance, Flavor. 
* Selecting an outcome type yields a page that shows the "Top 5" and "Bottom 5" plants for each of these outcome criteria. We would show both the star rating and the number of ratings.

Timing
* time to germination, time to first flower, time to first harvest, time to final harvest. 
* The pull-down menu enables you to select a few plants (not sure how to decide which ones get included). But selecting a plant yields a set of bar charts, one per type of timing.  
* For each bar chart, the x-axis is the number of days since the start date, and the y-axis is the number of plantings that exhibited the specified timing type (i.e. "first harvest").  So, for the "First Harvest" timing type for the plant "Zucchini (Dark Star)", you might see a bar with height 12 on day 49, a bar with height 17 on day 50, a bar with height 23 on day 51, a bar with height 6 on day 52, etc. Timing data can help gardeners decide when to plant and how long they should plan to keep a plant in the garden.

Seeds
* What seeds have been harvested by gardeners in the Chapter, and which ones are available for sharing. 
* I can imagine a "Top 5" section in which we show the plants that have been most frequently grown to the point of seed harvest.   
* We can also provide a "Top 5" list of seeds that gardeners are making available for sharing. (This list is ordered by the number of gardeners sharing seeds from a specific plant).


## AGC Site Map
* Why AGC
  * Think Global, Act Local
* AGC Innovations
* Related Work
* Review Questions
  * For Gardeners
  * For Developers
  * For Entrepreneurs


## Old Stuff

* Dynamically generate outcome star fields and values from the outcome object.
* Add a showPerennials checkbox.
* Support climate data.
* Update data model with:
  * startType field (direct seed, greenhouse, starter) (for planting instance)
  * perennial: true (for plant)
