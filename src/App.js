import React, { useState, useEffect } from 'react';
import { Row } from './components/Row/Row';

import './App.css';

export function App() {
  const [rows, setRows] = useState([]);

  const cellWidth = 60;
  const cellHeight = 20;

  const [cellsAmount, setCellsAmount] = useState(Math.ceil(window.innerWidth / cellWidth));
  const [rowsAmount, setRowsAmount] = useState(Math.ceil(window.innerHeight / cellHeight));

  useEffect(() => {
    addRows(rowsAmount);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', addMore);

    return () => {
      window.removeEventListener('resize', addMore);
    };
  });

  function addMore(event) {
    const newWidth = event.currentTarget.innerWidth;
    const newHeight = event.currentTarget.innerHeight;

    if (Math.ceil(newHeight / cellHeight) > rowsAmount
    && Math.ceil(newHeight / cellHeight) < 40000
    ) {
      setRowsAmount(Math.ceil(newHeight / cellHeight));
      addRows(Math.ceil(newHeight / cellHeight) - rowsAmount);
    }

    if (Math.ceil(newWidth / cellWidth) > cellsAmount
      && Math.ceil(newWidth / cellWidth) < 40000
    ) {
      setCellsAmount(Math.ceil(newWidth / cellWidth));
      addCells(Math.ceil(newWidth / cellWidth) - cellsAmount);
    }
  };

  function addRows(amount) {
    const newRows = [];

    for (let i = 0; i < amount; i++) {
      const newRow = [];

      for (let s = 0; s < cellsAmount; s++) {
        newRow.push({id: `${+new Date()}${Math.random()}`, content: ''})
      }

      newRows.push(newRow);
    }

    setRows(prevRows => [...prevRows, ...newRows]);
  };

  function addCells(amount) {
    setRows(prevRows => prevRows.map(
      row => {
        const newRow = [...row];

        for (let s = 0; s < amount; s++) {
          newRow.push({id: `${+new Date()}${Math.random()}`, content: ''})
        }

        return newRow;
      })
    );
  };

  return (
    <div className="App">

      {rows && rows.map((row, i) => (
        <Row
          key={i}
          row={row}
        />
      ))}

    </div>
  );
}
