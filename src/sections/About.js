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
        <p>Welcome to a sample Agile Garden Club public garden view.</p>
        <p><b>Agile Garden Club</b> is an organization whose mission is to help build local &quot;communities of practice&quot; that result in better planning and management of home gardens. To accomplish this, we are designing technologies that help gardeners help each other through shared experiences and insights. </p>
        <p>AGC differs from other garden support technologies in two primary ways:</p>
        <ol>
          <li>Superior support for collaboration, for historical insights over multiple seasons, and for local community building.</li>
          <li>Unlike many other garden organizations, AGC is not funded by a seed company. Instead, AGC implements &quot;crowd sourcing&quot; of seed information by chapter members based upon real-world experience in local conditions. We want to facilitate and increase the use of home-harvested seeds and seed sharing whenever possible.</li>
        </ol>
        <p>This <b>Public Garden View</b> is an option available to AGC Chapter members. Enabling this view tells our technology to generate a web page like this one. AGC Chapter members can share the web page address to provide details about their garden to others regardless of whether they are a Chapter member or not. This Public Garden View does not reveal the identity of gardeners or the specific location of the garden. </p>
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
