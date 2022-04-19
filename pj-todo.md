# Philip's To Do List.

## Notification implementation
* For each observation, generate and add notifications to corresponding plantings from other gardens.
  * Generate a list of "other" plantings: all plantings from all other gardens.
  * Filter this initial list to those plantings that that have the same plantID (or same plant name).
  * Create a notification object to attach to the matching plantings. 

## Observation implementation

* Add the ability to represent replies.
* Add the ability to represent notifications.

* Update data model with:
  * startType field (direct seed, greenhouse, starter) (for planting instance)
  * perennial: true (for plant)

## Old Stuff

* Dynamically generate outcome star fields and values from the outcome object.
* Add a showPerennials checkbox.
* Support climate data.
