import React from 'react';
import DrugConceptItem from './drug_concept_item';

const DrugConceptList = (props) => {
  if (!props.validConcept) {
    return (
      <div>
        <h3>Concepts:</h3>
        <div>No results found.</div>
      </div>
    );
  }

  const drugs = props.drugConcepts.map((drug, index) => {
    return (
      <DrugConceptItem
        onDrugSelect={props.onDrugSelect}
        key={index}
        drug={drug}
        selectedDrugName={props.selectedDrugName}/>
    );
  });

  return (
    <ul className="col-md-6 list-group">
      <h3>Concepts:</h3>
      {drugs}
    </ul>
  );
};

export default DrugConceptList;
