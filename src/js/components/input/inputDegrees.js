import React from 'react';

export default function InputTime (props) {
  let minOrMax = props.minOrMax;
  let currValue = props.currValue;
  let onChange = props.onChange;
  const isInit = props.isInit;

  return (
    <div className="component">
      <h3 className="header">{minOrMax} temperature</h3>
      <p>{currValue} °F</p>
      <input id={minOrMax} type="range" min ="-20" max="120" value={currValue} onChange ={onChange} disabled={!isInit} />
    </div>
  );
}
