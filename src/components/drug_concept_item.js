import React from 'react';

const DrugConceptItem = ({drug, onDrugSelect}) => {

  return (
    <li className="list-group-item"
        onClick={() => onDrugSelect(drug)} >
      {drug.name}
    </li>
  );
};

export default DrugConceptItem;
