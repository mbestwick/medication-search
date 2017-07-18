import React from 'react';

const DrugConceptItem = ({drug, onDrugSelect, selectedDrugName}) => {

  function onClickAction(event) {
    onDrugSelect(drug);
    event.target.style = 'background-color: #D6DCE4';
  }

  return (
    <li className="list-group-item"
        id={drug.name}
        onClick={(e) => onClickAction(e)} >
      {drug.name}
    </li>
  );
};

export default DrugConceptItem;
