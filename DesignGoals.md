## Design goals for the public garden site

The fundamental design goal for the public garden site is to illustrate all of the major functional advantages of AGC. But in order to do that, we must first achieve the "baseline" design goal:

#### Baseline: AGC can represent at least one real, non-trivial garden.

This is not an advantage of AGC over other systems, this is just the entry ticket.  Fortunately, Jenna has excellent records for her garden that we can use to verify whether or not we can achieve this design goal.

The public garden site now has the ability to represent multiple gardens. This means that we can not only illustrate a single, non-trivial garden, but potentially two or more non-trivial gardens. For example, we could illustrate Jesse's garden or one or more of Common Threads gardens.

#### Feature 0: AGC can represent at least one real, non-trivial community.

Unfortunately, the public site cannot at this point demonstrate an important design goal: that "AGC can represent a real, non-trivial community (i.e. Chapter)". We will have to simulate Chapter data.  It is important that we try to figure out ways to simulate this data as accurately as possible. For example, perhaps we can get information from master gardeners or local seed growers about some of the most popular plants being grown in the area, or some of the biggest problems with plants in the area. That way the simulated community data won't be wildly off the mark.

#### Feature 1: AGC provides useful historical perspectives.

Jenna has two years of prior data (2020, 2021) plus planning data for 2022. Once we have added all of this data, we will need to show how the various timeline perspectives (by year, by bed, by plant, by family) of Jenna's garden provides concrete examples of useful insight.

We may find concrete examples of useful insight from the implementation of other gardens as well. 

#### Feature 2: AGC provides useful community plant evaluation data.

There are several potentially useful forms of local, community data for each plant: (1) Aggregate "star" rankings for: germination, appearance, pest/disease resistance, yield, and flavor; and (2) Aggregate "observation" data; (3) Aggregate start times, transplant times, first harvest times, and end times.  All of these are useful for improving the ability of gardener to select the most appropriate plants for their garden, and estimate when to best plant and harvest.

Unfortunately, it is unlikely that we can provide concrete, real community data that would lead to accurate evaluations. The best we can do is simulate it.   

One way to increase the verisimilitude of our simulated community data is to request feedback from the Bellingham gardener facebook group. 

#### Feature 3: AGC supports community seed saving and sharing.

Many garden planning systems are designed to "channel" gardeners to sponsoring companies for their seed purchases.

AGC can distinguish itself by instead providing explicit support for seed saving and sharing. 

For example, assume we extend our current representation of a planting with:

  * A flag indicating if seeds were harvested for this planting; 
  * A rating from 1-5 to evaluate the seed production success of the planting; 
  * A flag indicating if the gardener has seeds available to share with others from this planting.
  
This creates infrastructure to support "community seed saving and sharing", which is useful for improving seed availability and encouraging gardeners to grow seeds, which improves community resilience.

#### Feature 4: AGC supports community real-time notifications.

Once we have the 2022 garden plan for Jenna, we can illustrate "community real-time notification", which is the communication of an Observation made by another community member to Jenna's garden, because the observation is related to a plant that is also growing in Jenna's garden. This is useful because (a) real-time notifications  about (say) pests can provide an actionable early warning, and (b) there is no additional overhead to the community member making the observation--they would make the Observation anyway, and the system takes care of communicating it to other gardeners for whom it would be relevant.

Real-time notifications can be illustrated if we implement multiple gardens, and where some of the gardens having plantings based on the same plant in the same season.

#### Feature 5: The public garden representation provides enough value to be useful to a gardener with sufficient technological expertise to update the representation of their garden manually.

It would be cool if we can make the public garden representation so feature-full that someone like Jenna (who will know how to add garden data as javascript) finds it useful enough that she will update it to reflect the current state of her garden. 
