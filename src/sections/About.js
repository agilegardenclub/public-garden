import React from 'react';
import { Documentation } from '../components/Documentation';
import { BadgeWithPopover } from '../components/BadgeWithPopover';

/**
 * Overview of AGC and the Public Garden View.
 */
function About() {

  return (
    <div>
      <Documentation heading="About Agile Garden Club">
        <p>The mission of Agile Garden Club (AGC) is to improve food resiliency and security by fostering local &quot;communities of practice&quot; for home gardening. To accomplish this, we are designing technologies to help gardeners help
          each other through shared experiences and insights. </p>
        <p>AGC technologies differ from other garden technologies in several ways:</p>
        <ol>
          <li><b>Social and seasonal</b> Many garden technologies represent gardening as a solitary, single season activity. In contrast, AGC represents gardening as a collaborative activity spanning multiple seasons by a member&lsquo;s
            entire local gardening community.
          </li>
          <li><b>Vendor independence</b> Many garden technologies are sponsored in whole or in part by a seed or garden equipment vendor. In contrast, AGC is vendor-independent. Among other things, vendor independence enables us to promote
            the use of home-harvested seeds and seed sharing.
          </li>
          <li><b>Mobile first</b> Many garden technologies tether you to your computer. In contrast, AGC believes the best time to gather data about your garden is when you&lsquo;re actually in your garden. We will provide native mobile
            apps so that all features of AGC are available on your Apple or Android phone. (We also support the desktop for those long winter nights.)
          </li>
          <li><b>Local, not global</b> If you live in Alaska, garden data from Florida is of limited use. AGC groups our members into local Chapters covering a small geographic region. This increases the relevance of community-supplied data
            on plant and seed outcomes, and makes it easier to actually meet with your fellow chapter members if you want.
          </li>
        </ol>
        <p>This Public Garden View is a feature we intend to make available to AGC members. AGC members will be able to opt-in to a &quot;public view&quot; of their garden(s) for review by non-AGC members. The Public Garden View is designed
          to not reveal the identity of gardeners or the specific location of the garden.</p>
        <p>We are in initial development of AGC technology, and so we are also using this public view to explore design features. Thus, later public view interfaces may differ in some ways from what you see here.</p>
      </Documentation>

      <Documentation heading="Terminology conventions">
        <p>We use the following terminology in AGC:</p>
        <p><b>Variety</b> is a specific plant type. For example, when you buy seeds, you choose a variety such as &quot;Tomato (Sun Gold)&quot;.</p>
        <p><b>Crop</b> specifies the plant independent of its variety. For example, &quot;Tomato&quot; is a crop.</p>
        <p><b>Family</b> specifies the botanical family associated with one or more crops (and by extension, their varietys). For example, the &quot;Nightshade&quot; family groups together Tomatoes, Potatoes, and Peppers. Family information
          is useful for crop rotation.</p>
        <p><b>Planting</b> specifies one (or more) actual plants in a garden. A planting typically has a start date (i.e. the day that the seeds were sown or a starter was put in a bed), an end date (i.e. the date the planting was pulled),
          the date of first harvest, the bed it was planted in, and so forth.</p>
      </Documentation>

      <Documentation heading="Outcome Data">
        <p>A goal of AGC is to provide an easy way for gardeners to provide useful <b>outcome data</b> regarding their plantings. Outcome data can help a gardener improve their practices over time, and help a chapter discover what grows well (or
          not so well) in their geographical location. When a chapter contains gardeners with a range of skill levels and circumstances, chapter-level outcome data can help identify which varieties grow well in almost any situation within
          the Chapter, and which varieties grow quite differently depending upon the situation.</p>
        <p>The following table specifies the types of outcome data collected by AGC. All outcome data is provided using a five point scale, where &quot;1&quot; is always lowest and &quot;5&quot; is highest. </p>
        <p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Germination</th>
                  <td><b>Failure</b><br/> No seeds germinated.</td>
                  <td><b>Poor</b><br/> Approximately a quarter of the seeds germinated.</td>
                  <td><b>OK</b><br/> Approximately half of the seeds germinated.</td>
                  <td><b>Good</b><br/> Approximately 3/4 of the seeds germinated</td>
                  <td><b>Outstanding</b><br/> 90% or more of the seeds germinated.</td>
                </tr>
                <tr>
                  <th scope="row">Yield</th>
                  <td><b>None</b><br/> The planting died and/or did not yield any food.</td>
                  <td><b>Minimal</b><br/> The planting yielded significantly less food than expected.</td>
                  <td><b>OK</b><br/> The planting yielded the expected amount of food.</td>
                  <td><b>Good</b><br/> The planting yielded somewhat more food than expected.</td>
                  <td><b>Outstanding</b><br/> The planting yielded significantly more food than expected.</td>
                </tr>
                <tr>
                  <th scope="row">Flavor</th>
                  <td><b>Bad</b><br/> Not worth eating.</td>
                  <td><b>Bland</b><br/> Worth eating, but only a little.</td>
                  <td><b>OK</b><br/> Expected level of flavor.</td>
                  <td><b>Good</b><br/> Better than OK flavor, enjoyable to eat.</td>
                  <td><b>Outstanding</b><br/> Can&apos;t imagine it tasting better.</td>
                </tr>
                <tr>
                  <th scope="row">Pest and disease resistance</th>
                  <td><b>Extremely poor</b><br/> 90% or more of the plantings have damage.</td>
                  <td><b>Poor</b><br/> More than half of the plantings have damage.</td>
                  <td><b>OK</b><br/> No more than a quarter of plantings have damage.</td>
                  <td><b>Good</b><br/> Only a few plantings have damage.</td>
                  <td><b>Outstanding</b><br/> No observable damage.</td>
                </tr>
                <tr>
                  <th scope="row">Appearance</th>
                  <td><b>Almost all ugly</b><br/> 90% or more of the crop is ugly.</td>
                  <td><b>Mostly ugly</b><br/> Over 50% of the crop is ugly.</td>
                  <td><b>Mostly OK</b><br/> Over 50% of the crop is OK.</td>
                  <td><b>Mostly beautiful</b><br/> Over 50% of the crop is beautiful.</td>
                  <td><b>Almost all beautiful</b><br/> 90% or more of the crop is beautiful.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
        <p>Providing outcome data is always optional. A gardener can provide only a subset of the outcome measures. For example, if they don&apos;t care about Appearance, they don&apos;t have to provide that data. Outcome data can be useful to gardeners and chapters even when partially available, as long as the ratings are applied consistently.</p>
      </Documentation>

      <Documentation heading="About the UI" variant="info">
        <p>Please note the following about the user interface to this page:</p>
        <ul>
          <li> You can hide any of these documentation boxes by clicking on the &quot;X&quot; in the upper right corner.. Refresh the page to see them again.</li>
          <li> You can click on any colored badge icon to display details. For example: <BadgeWithPopover header='You clicked!' label='Click Me!'><p>Click the badge icon again to hide this popup.</p></BadgeWithPopover></li>
        </ul>
      </Documentation>
    </div>
  );
}

export default About;
