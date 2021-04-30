import React, { useState, useEffect } from 'react';
import { Row } from './components/Row/Row';

import './App.css';

export function App() {
  const [rows, setRows] = useState([]);

  const cellWidth = 75;
  const cellHeight = 25;
  const cellsOutside = 5;

  const [cellsAmount, setCellsAmount] = useState(Math.ceil(window.innerWidth / cellWidth) + cellsOutside);
  const [rowsAmount, setRowsAmount] = useState(Math.ceil(window.innerHeight / cellHeight) + cellsOutside);

  useEffect(() => {
    addRows(rowsAmount);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResizeAdder);
    window.addEventListener('scroll', onScrollAdder);

    return () => {
      window.removeEventListener('resize', onResizeAdder);
      window.removeEventListener('scroll', onScrollAdder);
    };
  });

  function onResizeAdder() {
    const newWidth = document.documentElement.scrollWidth;
    const newHeight = document.documentElement.scrollHeight;

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

  function onScrollAdder() {
    const docX = document.documentElement.scrollWidth;
    const docY = document.documentElement.scrollHeight;

    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    if (scrollY * 100 / (docY - window.innerHeight) > 90) {
      setRowsAmount(Math.ceil(docY / cellHeight));
      addRows(cellsOutside);
    };

    if (scrollX * 100 / (docX - window.innerWidth) > 90) {
      setCellsAmount(Math.ceil(docX / cellWidth));
      addCells(cellsOutside);
    };
  };

  function addRows(amount) {
    const newRows = [];

    for (let i = 0; i < amount + cellsOutside; i++) {
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

        for (let s = 0; s < amount + cellsOutside; s++) {
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
          rowIndex={i}
          row={row}
        />
      ))}

    </div>
  );
}