import React from 'react';
import AlternativeDrugItem from './alternative_drug_item';

const AlternativeDrugList = (props) => {
  if (!props.validAlts) {
    return (
      <div className="col-md-6 list-group">
        <h3>Alternatives:</h3>
        <div>No alternatives found.</div>
      </div>
    );
  }

  if (props.alts.length === 0) {
    return <div className="col-md-6 list-group"><h3>Alternatives:</h3></div>;
  }

  const alternativeDrugs = props.alts.map((alt, index) => {
    return (
      <AlternativeDrugItem
        key={index}
        alt={alt} />
    );
  });

  return (
    <ul className="col-md-6 list-group">
      <h3>Alternatives:</h3>
      { alternativeDrugs }
    </ul>
  );

}

export default AlternativeDrugList;
