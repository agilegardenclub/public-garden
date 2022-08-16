import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NestedDropdown } from './NestedDropdown';
import { getVarietyNameShort } from '../datamodel/VarietyInfo';

/*
This is a failed attempt to refactor out the selectors.
It fails because of Line 19, where we invoke the passed function to re-render the parent.
We can't re-render the parent while we're in the midst of rendering a child component.
I can't think of any way to resolve this:
  * If I determine the initialVarietyID outside of this component, then I "break the abstraction" and
    there's little benefit to making this component.
  * If I don't set the initial variety ID, then I don't get an "initial rendering", and thus force the
    user to make a selection in order to see the visualization. I don't like that either.
 */

export function VarietySelector({ plantingHistory, onSetVariety }) {
  const menuItems = plantingHistory.varietyDropdownMenuItems();
  // const initialVarietyID = menuItems[0].items[0].eventKey;
  const initialVarietyName = menuItems[0].items[0].label;
  const [selectedVarietyName, setVarietyName] = useState(null);
  if (!selectedVarietyName) {
    setVarietyName(initialVarietyName);
    // onSetVariety(initialVarietyID);
  }
  const onSelect = (eventKey) => {
    if (eventKey) {
      setVarietyName(getVarietyNameShort(eventKey));
      onSetVariety(eventKey); // eventKey is varietyID
    }
  };

  return (
    <Row className="mb-3"><Col xs={2}>Select Variety:</Col> <Col><NestedDropdown title={selectedVarietyName} items={menuItems} onSelect={onSelect}/></Col></Row>
  );
}

VarietySelector.propTypes = {
  plantingHistory: PropTypes.object,
  onSetVariety: PropTypes.func,
};
