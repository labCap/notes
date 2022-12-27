import React from "react";
import { MdDeleteForever } from "react-icons/md";

export const Note = () => {
  return (
    <div className="note">
      <span>hi</span>
      <div className="note__footer">
        <small>13/04/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};
