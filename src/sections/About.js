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
        <p><b>Agile Garden Club</b> is an organization providing technology for collaborative planning and management of home gardens. We are designing technology to support not just individual garden planning and management, but also
          efficient and effective sharing of data and insights amongst gardeners in the same geographic region.</p>
        <p>AGC differs from other garden planning technologies in two important ways:</p>
        <ol>
          <li>Superior support for collaboration, for historical insights over multiple seasons, and for building &quot;local communities of practice&quot;.</li>
          <li>Unlike many other garden planning tools, AGC accepts no funding from seed companies. All seed information is crowd-sourced by chapter members based upon real-world experience in local conditions. AGC supports the use of home-harvested seeds and seed sharing whenever possible.</li>
        </ol>
        <p>The <b>Public Garden View</b> is an option available to owner(s) of an AGC garden. Enabling this view tells the system to generate a web page like this one. Garden owners can share the web page to provide details about their garden
          without requiring the AGC app. This Public Garden View does not reveal the identity of gardeners or the specific location of the garden. </p>
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