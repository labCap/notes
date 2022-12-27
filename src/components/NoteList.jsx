import React from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NoteList = ({
  notes,
  handleAddNote = (f) => f,
  handleDeleteNote = (f) => f,
}) => {
  return (
    <div className="note-list">
      {notes.map(({ id, text, date }) => (
        <Note
          key={id}
          id={id}
          text={text}
          date={date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
