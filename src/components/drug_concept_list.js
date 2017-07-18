import React from 'react';
import DrugConceptItem from './drug_concept_item';

const DrugConceptList = (props) => {
  const drugs = props.drugConcepts.map((drug, index) => {
    return (
      <DrugConceptItem
        onDrugSelect={props.onDrugSelect}
        key={index}
        drug={drug} />
    );
  });

  return (
    <ul className="col-md-6 list-group">
      Concepts:
      {drugs}
    </ul>
  );
};

export default DrugConceptList;
