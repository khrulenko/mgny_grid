import React from 'react';
import { Cell } from '../Cell/Cell';

import './Row.css';

export function Row ({
  row,
  rowIndex,
}) {

  return (
    <div className={rowIndex === 0 ? 'topRulerRow' :'row'}>

      {row.map((cell, cellIndex) => (
        <Cell
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          key={cell.id}
          cell={cell}
        />
      ))}

    </div>
  );
};
