import React from 'react';
import AlternativeDrugItem from './alternative_drug_item';

const AlternativeDrugList = (props) => {
  if (props.alts.length === 0) {
    return <div>Alternatives:</div>;
  }

  const alternativeDrugs = props.alts.map((alt) => {
    const index = props.alts.indexOf(alt);
    return (
      <AlternativeDrugItem
        key={index}
        alt={alt} />
    );
  });

  return (
    <ul className="col-md-6 list-group">
      <div>Alternatives:</div>
      { alternativeDrugs }
    </ul>
  );

}

export default AlternativeDrugList;
