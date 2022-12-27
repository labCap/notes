import { useState } from "react";
import { nanoid } from "nanoid";
import { NoteList } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "01/01/0001",
    },
    {
      id: nanoid(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "01/01/0001",
    },
    {
      id: nanoid(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "01/01/0001",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container">
      <NoteList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
