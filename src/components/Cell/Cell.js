import { useState } from 'react';
import './Cell.css';

export function Cell ({ cell, rowIndex, cellIndex }) {
  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState('');

  function setNewContent(content) {
    if (Number.isInteger(+content)) {
      setContent(parseInt(content));
    };

    if (content === '') {
      setContent(content);
    };
  };

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


      {(cellIndex !== 0 && rowIndex !== 0) &&
        <>
          <label>

            <input
              type="checkbox"
              className={'checkbox'}
              checked={isChecked}
              onChange={() => setIsChecked(prev => !prev)}
            >
            </input>

            <input
              type="text"
              className={'textInput'}
              value={content}
              onChange={event => setNewContent(event.target.value)}
              disabled={isChecked ? true : false}
            >
            </input>

            <div className={'fakeCheckbox'}>
              {isChecked && 'X'}
            </div>

          </label>
        </>
      }
    </div>
  );
};
