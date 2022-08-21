import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export function YearsSelector({ years, onSetYears }) {
  const initialYearState = {};
  // create a map of booleans to hold checkbox state value.
  for (const year of years) {
    initialYearState[year] = true;
  }

  const [yearState, setYearState] = useState(initialYearState);
  const onChange = (year) => {
    if (year) {
      yearState[year] = !yearState[year];
      setYearState(prevState => ({ ...prevState }));
      const selectedYears = [];
      for (const yearField in yearState) {
        if (yearState[yearField]) {
          selectedYears.push(parseInt(yearField, 10));
        }
      }
      onSetYears(selectedYears);
    }
  };

  return (
    <Form>
      {years.map(year => (
        <Form.Check key={year} inline label={year} type='checkbox' onChange={() => onChange(year)} checked={yearState[year]}/>
      ))
      }
    </Form>
  );
}

YearsSelector.propTypes = {
  years: PropTypes.array,
  onSetYears: PropTypes.func,
};
