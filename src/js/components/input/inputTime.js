import React from 'react';
import { calculateTime } from '../../utils/helperFunctions';

export default function InputTime(props) {
  let direction = props.direction;
  let currValue = props.currValue;
  let onChange = props.onChange;
  const isInit = props.isInit;

  return (
    <div className="component">
      <h3 className="header">{direction} Time</h3>
      <p>{calculateTime(currValue, false)}</p>
      <input
        id={direction}
        type="range"
        min="0"
        max="23"
        value={currValue}
        onChange={onChange}
        disabled={!isInit}
      />
    </div>
  );
}
