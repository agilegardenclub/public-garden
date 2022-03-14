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
        <p><b>Agile Garden Club</b> is an organization whose mission is to help build local &quot;communities of practice&quot; that result in better planning and management of home gardens. To accomplish this, we are designing technologies to help gardeners help each other through shared experiences and insights. </p>
        <p>AGC technologies differ from other garden technologies in several ways:</p>
        <ol>
          <li>Many garden technologies represent gardening as a solitary, single season activity. In contrast, AGC represents gardening as a collaborative activity, with support for gaining insights over multiple seasons by all of a member&lsquo;s local gardening community.</li>
          <li>Many garden technologies are sponsored in whole or in part by a seed vendor. In contrast, AGC is vendor-independent. AGC seed data does not come directly from a vendor, but instead is incrementally built by chapter members based upon their real-world experience in local conditions. Vendor-independence frees us to support and spread the use of home-harvested seeds and seed sharing whenever possible.</li>
          <li>Many garden technologies tether you to your computer. In contrast, AGC believes the best time to gather data about your garden is when you&lsquo;re actually in your garden. We provide native mobile apps so that all features of AGC are available on your Apple or Android phone. (We also support the desktop for those long winter nights.)</li>
          <li>AGC data is Chapter-specific. If you live in Alaska, garden data from Florida is of limited use. AGC divides our overall community into local Chapters covering a small geographic region. This helps ensure the relevance of community-supplied data on plant and seed outcomes, and means you can actually meet up with your fellow chapter members if you want. </li>
        </ol>
        <p>This <b>Public Garden View</b> is an option available to AGC Chapter members. Enabling this view tells our technology to generate a web page like this one. AGC Chapter members can share the web page address to provide details about their garden to others regardless of whether they are a Chapter member or not. This Public Garden View is designed to not reveal the identity of gardeners or the specific location of the garden. </p>
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
