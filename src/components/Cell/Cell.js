import { useState, useEffect, useRef } from 'react';
import './Cell.css';

export function Cell ({
  cell,
  rowIndex,
  cellIndex,
  setCellContent
}) {

  const [isChecked, setIsChecked] = useState(false);
  const [content, setContent] = useState(cell.content);
  const [isSaveVisible, setIsSaveVisible] = useState(false);

  function setNewContent(content) {
    if (content === '') {
      setContent(content);
      setIsSaveVisible(true);
    };

    if (content.split('').every(el => el >= '0' && el <= '9')) {
      setContent(content);
      setIsSaveVisible(true);
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
          <input
            type='checkbox'
            className={'checkbox'}
            defaultChecked={isChecked}
          >
          </input>

          <label
            htmlFor={`${cell.id}`}
            className={'fakeCheckbox'}
            onClick={() => {
              setIsChecked(prev => !prev);
              if (isChecked) {
                setIsSaveVisible(true);
              } else {
                setIsSaveVisible(false);
              }
            }}
          >
            {isChecked && 'X'}
          </label>

          <input
            id={`${cell.id}`}
            type='text'
            className={'textInput'}
            value={content}
            onChange={event => setNewContent(event.target.value)}

            onFocus={() => {
              setIsSaveVisible(true);
            }}

            onClick={() => {
              setIsSaveVisible(true);
            }}

            onBlur={() => {
              setNewContent(cell.content);
              setIsSaveVisible(false);
            }}

            disabled={isChecked ? true : false}
          >
          </input>

          {isSaveVisible &&
            <button
              className={'saveButton'}
              onMouseDown={() => {
                setCellContent(content, cell.id);
                setIsSaveVisible(false);
                console.log(
                  `Changed cell with coords X: ${cellIndex}, Y: ${rowIndex}. ${content ? `New content is: ${content}` : 'Contentent is clear.'}`
                );
              }}
            >
              SAVE
            </button>
          }
        </>
      }
    </div>
  );
};
