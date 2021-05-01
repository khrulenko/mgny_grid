import React from 'react';
import { Cell } from '../Cell/Cell';

import './Row.css';

export function Row ({ row, rowIndex, setCellContent }) {

  return (
    <div className={rowIndex === 0 ? 'topRulerRow' :'row'}>
      {row.map((cell, cellIndex) => (
        <Cell
          setCellContent={setCellContent}
          rowIndex={rowIndex}
          cellIndex={cellIndex}
          key={cell.id}
          cell={cell}
        />
      ))}
    </div>
  );
};
