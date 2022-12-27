import { useState } from "react";
import { nanoid } from "nanoid";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";

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
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search />
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
