import React from 'react';

const AlternativeDrugItem = ({alt}) => {

  return (
    <li className="list-group-item">
      {alt.name}
    </li>
  );
};

export default AlternativeDrugItem;
