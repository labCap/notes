import React from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map(({ id, text, date }) => (
        <Note key={id} id={id} text={text} date={date} />
      ))}
      <AddNote />
    </div>
  );
};
