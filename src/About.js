import React from 'react';
import Documentation from './Documentation';

/**
 * Overview of AGC and the Public Garden View.
 */
function About() {

  return (
    <Documentation>
      <p>Welcome to a sample Agile Garden Club public garden view.</p>
      <p><b>Agile Garden Club</b> is an organization providing technology for collaborative planning and management of home gardens. We are designing mobile-first applications to support not just individual garden planning and management, but also efficient and effective sharing of data and insights amongst gardeners in the same geographic region. Our support for collaboration, for historical insights over multiple seasons, and for &quot;local communities of practice&quot; sets AGC apart from other garden planning systems.</p>
      <p>The <b>Public Garden View</b> is an option available to owner(s) of an AGC garden. Enabling this view tells the system to generate a web page like this one. The gardeners can share its unique URL with others to provide details about a garden without requiring others to download the AGC app. The Public Garden View does not reveal the identity of gardeners or the specific location of the garden. </p>
      <p>You can dismiss any of these documentation boxes by clicking on the &quot;X&quot; in the upper right corner. Refresh the page to display them again.</p>
    </Documentation>
  );
}

export default About;
