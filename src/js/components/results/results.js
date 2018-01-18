import React from 'react';

export default function Results (props) {
  const reasons = props.reasons;
  const bikeWeather = props.bikeWeather;
  return (
    <div className="component">
      <h3 className ="header">Results - {bikeWeather ? 'Bicycle' : 'Metro'}</h3>
      <ol>{reasons.map((reason, i)=>(
        <li key={i}>{reason}</li>
        ))}
      </ol>
    </div>
  );
}
