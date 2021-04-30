import './Cell.css';

export function Cell ({ cell, rowIndex, cellIndex }) {


  return (

    <div
      className={
        cellIndex === 0 && rowIndex !== 0
        ? 'leftRulerCell'
        : rowIndex === 0 && cellIndex !== 0
        ? 'topRulerCell'
        : rowIndex === 0 && cellIndex === 0
        ? 'crossCell'
        : 'cell'
      }
    >

      {cellIndex === 0 ? (rowIndex !== 0 ? rowIndex : '') : ''}
      {rowIndex === 0 ? (cellIndex !== 0 ? cellIndex : '') : ''}

    </div>
  );
}
