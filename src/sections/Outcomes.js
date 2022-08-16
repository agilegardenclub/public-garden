import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import { Documentation } from '../components/Documentation';
import { OutcomeByVariety } from '../components/OutcomeByVariety';
import { OutcomeByCrop } from '../components/OutcomeByCrop';

/**
 * Seed section
 */
function Outcomes() {

  return (
    <div id="outcomes">
      <Container className="py-3">
        <h2>Outcomes</h2>
        <Documentation heading="About outcome data">
          <p>A goal of AGC is to provide an easy way for gardeners to provide useful <b>outcome data</b> regarding their plantings. Outcome data can help a gardener improve their practices over time, and help a chapter discover what grows well (or
            not so well) in their geographical location. When a chapter contains gardeners with a range of skill levels and circumstances, chapter-level outcome data can help identify which varieties grow well in almost any situation within
            the Chapter, and which varieties grow quite differently depending upon the situation.</p>
          <p>The following table specifies the types of outcome data collected by AGC (Germination, Yield, Flavor, Pest and disease resistance, and Appearance) and the meaning of the five point scale for each type. </p>
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

          <p>Providing outcome data is optional. A gardener can provide only a subset of the outcome measures. For example, if they don&apos;t care about Appearance, they don&apos;t have to provide that data. Outcome data can be useful to gardeners and chapters even when partially available, as long as the ratings are applied consistently, which is why we provide definitions for the five rating levels for each outcome type.</p>
        </Documentation>
        <Tabs defaultActiveKey="By Variety" className="mb-3">
          <Tab eventKey="By Variety" title="By Variety">
            <OutcomeByVariety />
          </Tab>
          <Tab eventKey="By Crop" title="By Crop">
            <OutcomeByCrop />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Outcomes;
