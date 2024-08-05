import React, { useState, useRef } from 'react';
import NotesModel from '../../models/Notes';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Notes({ note, onDragStart, onDragEnd }) {
  const [noteContent, setNoteContent] = useState(note.content);
  const [isEditing, setIsEditing] = useState(false);
  const contentEditableRef = useRef(null);

  const handleContentChange = () => {
    const newContent = contentEditableRef.current.innerText;
    setIsEditing(true);
    // setNoteContent(newContent);
  };

  const noteContainerClass = classNames(
    'noteContainer',
    `bg-post-color-${note.color}`,
    'p-5',
    'm-5',
    'w-full', // Full width for small screens
    'md:w-64', // Fixed width for medium and larger screens
    'h-64', // Fixed height
    'shadow-md',
    'rounded-xl',
    'flex',
    'flex-col',
    'justify-between'
  );

  return (
    <div className={noteContainerClass}
    draggable
    onDragStart={(e) => onDragStart(e, note)}
    onDragOver={onDragEnd}
    >
      <div
        className="noteBody dark:text-custom-white text-ellipsis"
        contentEditable
        suppressContentEditableWarning
        onInput={handleContentChange}
        ref={contentEditableRef}
        style={{ outline: 'none', border: 'none' }}
      >
        {noteContent}
      </div>
      {(note.date === "" || note.month === "" || note.year === "") ? null : (
        <div className="datePosted pt-5 text-custom-gray-300 dark:text-custom-cream-white text-sm">
          <p>{note.date}, {note.month} {note.year}</p>
        </div>
      )}
      {
      isEditing ? (
        <button
          className="bg-custom-blue-500 text-custom-white p-2 rounded-md bg-cyan-300"
          onClick={() => {
            setIsEditing(false);
            setNoteContent(contentEditableRef.current.innerText);
          }}
        >
          Save
        </button>
      ) : null
    }
    </div>
    
  );
}

Notes.propTypes = {
  note: PropTypes.instanceOf(NotesModel).isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  note: new NotesModel("Type your note here", "", "", "", "yellow")
};