import React from 'react';
import { Documentation } from '../components/Documentation';
import { BadgeWithPopover } from '../components/BadgeWithPopover';

/**
 * Overview of AGC and the Public Garden View.
 */
function About() {

  return (
    <div>
      <Documentation>
        <p>Welcome to an example Agile Garden Club public garden view.</p>
        <p>The mission of <b>Agile Garden Club</b> is to improve food resiliency and security by fostering local &quot;communities of practice&quot; for home gardening. To accomplish this, we are designing technologies to help gardeners help each other through shared experiences and insights. </p>
        <p>AGC technologies differ from other garden technologies in several ways:</p>
        <ol>
          <li><b>Social and seasonal.</b> Many garden technologies represent gardening as a solitary, single season activity. In contrast, AGC represents gardening as a collaborative activity spanning multiple seasons by a member&lsquo;s entire local gardening community.</li>
          <li><b>Vendor independence.</b> Many garden technologies are sponsored in whole or in part by a seed or garden equipment vendor. In contrast, AGC is vendor-independent. Among other things, vendor independence enables us to promote the use of home-harvested seeds and seed sharing.</li>
          <li><b>Mobile first.</b> Many garden technologies tether you to your computer. In contrast, AGC believes the best time to gather data about your garden is when you&lsquo;re actually in your garden. We will provide native mobile apps so that all features of AGC are available on your Apple or Android phone. (We also support the desktop for those long winter nights.)</li>
          <li><b>Local, not global.</b> If you live in Alaska, garden data from Florida is of limited use. AGC groups our members into local Chapters covering a small geographic region. This increases the relevance of community-supplied data on plant and seed outcomes, and makes it easier to actually meet with your fellow chapter members if you want. </li>
        </ol>
        <p>This Public Garden View is a feature we intend to make available to AGC members.  AGC members will be able to opt-in to a &quot;public view&quot; of their garden(s) for review by non-AGC members. The Public Garden View is designed to not reveal the identity of gardeners or the specific location of the garden.</p>
        <p>During initial development, we are also using this public view to explore design features. Thus, the official public view interface may differ in some ways from what you see below.</p>
      </Documentation>

      <Documentation>
        <p>We adopt the following terminology:</p>
        <p><b>Varietal</b> is a specific plant type. For example, when you buy seeds, you choose a varietal such as &quot;Tomato (Sun Gold)&quot;.</p>
        <p><b>Crop</b> specifies the plant independent of its variety. For example, &quot;Tomato&quot; is a crop.</p>
        <p><b>Family</b> specifies the botanical family associated with one or more crops (and by extension, their varietals). For example, the &quot;Nightshade&quot; family groups together Tomatoes, Potatoes, and Peppers.</p>
        <p><b>Planting</b> specifies one (or more) actual plants in a garden. A planting typically has a start date (i.e. the day that the seeds were sown or a starter was put in a bed), an end date (i.e. the date the planting was pulled), the date of first harvest, the bed it was planted in, and so forth.</p>
      </Documentation>

      <Documentation variant="info">
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
