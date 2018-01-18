import React from 'react';

export default function InputTime (props) {
  let currValue = props.currValue;
  let onChange = props.onChange;
  return (
    <div>
      <h3>Highest acceptable precipitation chance</h3>
      <p>{currValue} %</p>
      <input type="range" min ="0" max="100" value={currValue} onChange ={onChange} />
    </div>
  );
}
