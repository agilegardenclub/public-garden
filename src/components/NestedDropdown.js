import React, { useState } from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
 * Implements a nested dropdown menu.
 * Because Bootstrap thinks there's no need to provide this out of the box. Sheesh.
 * Adapted from: https://njkhanh.com/creating-nested-drop-down-with-react-bootstrap-p5f3135303134
 * And help from: https://github.com/react-bootstrap/react-bootstrap/issues/4042#issuecomment-670552802
 */

// eslint-disable-next-line react/display-name
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Container
    fluid
    className="px-0 d-flex justify-content-between"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <span>{children}</span>
    <span>&#9656;</span>
  </Container>
));

CustomToggle.propTypes = {
  onClick: PropTypes.any,
  children: PropTypes.any,
};

function NestedDropdownItem({ title, children, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Dropdown.Item>
      <Dropdown
        variant="primary"
        drop="end"
        onSelect={onSelect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onToggle={() => setIsClicked(!isClicked)}
        show={isClicked || isHovered}
      >
        <Dropdown.Toggle as={CustomToggle}>{title}</Dropdown.Toggle>
        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    </Dropdown.Item>
  );
}

NestedDropdownItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  onSelect: PropTypes.any,
};

function ProcessItems({ items }) {
  return (
    items.map((item, index) => <Dropdown.Item key={index}>{item.name}</Dropdown.Item>)
  );
}

ProcessItems.propTypes = {
  items: PropTypes.array,
};

/**
 * Implement a nested dropdown menu.
 * @param title The label associated with the dropdown.
 * @param items An array of item objects.
 * A "regular" item has the structure:
 *   `{ type: 'item', label: <string>, eventKey: <string> }`
 * A "nested" item has the structure:
 *   `{ type: 'nested' label: <string>, eventKey: <string>, items: [<item objects>]}`
 * For example:
 *   ```
 *     [
 *       { type: 'item', label: 'Blue', eventKey: 'blue'},
 *       { type: 'item', label: 'Orange', eventKey: 'orange'},
 *       { type: 'nested', title: 'Others', items: [ { type: 'item', label: 'Black, eventKey: 'black'}, ]}
 *     ]
 *   ```
 * @param onSelect A function called when a menu item is selected.
 * @returns {JSX.Element}
 */
export function NestedDropdown({ title, items, onSelect }) {
  console.log(items);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" onSelect={onSelect}>
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <NestedDropdownItem title="Item 3">
          <Dropdown.Item>Item 3.1</Dropdown.Item>
          <Dropdown.Item>Item 3.2</Dropdown.Item>
          <Dropdown.Item>Item 3.3</Dropdown.Item>
        </NestedDropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

NestedDropdown.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  onSelect: PropTypes.any,
};
