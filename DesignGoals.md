## Design goals for the public garden page

I'm realizing that there's basically an infinite amount of functionality that could potentially be put into the public garden page, and so I think it's important to establish some criteria for when the page is "done enough" for now.  My thought is that we want the page to be sufficiently feature-full to demonstrate, in some manner, all of the major advantages of AGC, but it doesn't have to go any further than that for now.  Here's my initial list:

#### Baseline: AGC can represent a real, non-trivial garden.

This is not an advantage of AGC, this is just the entry ticket.  Fortunately, Jenna has excellent records for her garden that we can use to generate this representation.

Unfortunately, we cannot at this point demonstrate that "AGC can represent a real, non-trivial community (i.e. Chapter)". We will have to simulate Chapter data for the public garden.  It is important that we try to figure out ways to simulate this data as accurately as possible. For example, perhaps we can get information from master gardeners or local seed growers about some of the most popular plants being grown in the area, or some of the biggest problems with plants in the area. That way the simulated community data won't be wildly off the mark.

#### Feature 1: AGC provides useful historical perspectives.

Jenna has two years of prior data (2020, 2021) plus planning data for 2022.  Currently I am planning to have two historical perspectives: a "Bed History" view and a "Plant History" view. The Bed History view is useful for (at least) verifying crop rotation. I am not sure yet what the Plant History view will be useful for, but I am confident something will emerge once we see the results.

#### Feature 2: AGC provides useful community plant evaluation data.

There are several potentially useful forms of local, community data for each plant: (1) Aggregate "star" rankings for: germination, appearance, pest/disease resistance, yield, and flavor; and (2) Aggregate "observation" data; (3) Aggregate start times, transplant times, first harvest times, and end times.  All of these are useful for improving the ability of gardener to select the most appropriate plants for their garden, and estimate when to best plant and harvest.

#### Feature 3: AGC supports community seed saving and sharing.

Assume we extend our representation with the following: (1) a flag indicating if seeds were harvested for this planting; (2) a rating from 1-5 to evaluate the seed production success of the planting; and (3) a flag indicating if the gardener has seeds available to share with others from this planting.
This creates infrastructure to support "community seed saving and sharing", which is useful for improving seed availability and encouraging gardeners to grow seeds, which improves community resilience.

#### Feature 4: AGC supports community real-time notifications.

Once we have the 2022 garden plan for Jenna, we can illustrate "community real-time notification", which is the communication of an Observation made by another community member to Jenna's garden, because the observation is related to a plant that is also growing in Jenna's garden. This is useful because (a) real-time notifications  about (say) pests can provide an actionable early warning, and (b) there is no additional overhead to the community member making the observation--they would make the Observation anyway, and the system takes care of communicating it to other gardeners for whom it would be relevant.

I think these four features can be illustrated by the public page in some fashion, and that together they make the case for the design of AGC as well as we can make it at this time.
