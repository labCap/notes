import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const Note = ({ id, text, date, handleDeleteNote = (f) => f }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note__footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
