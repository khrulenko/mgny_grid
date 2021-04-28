import React, { useState, useEffect } from 'react';
import { Cell } from '../Cell/Cell';

import './Row.css';

export function Row ({ row }) {

  return (

    <div className={'row'}>
      {row.map(cell => (
        <Cell
          key={cell.id}
          cell={cell}
        />
      ))}
    </div>
  );
}
