import React from "react";

export const AddNote = () => {
  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        placeholder="Type to add a note..."
      ></textarea>

      <div className="note__footer">
        <small>200 Remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};
