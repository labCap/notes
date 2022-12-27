import { useState } from "react";
import { nanoid } from "nanoid";
import { NoteList } from "./components/NoteList";
import { Search } from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Lorem etur adipisicing.",
      date: "01/01/0001",
    },
    {
      id: nanoid(),
      text: "Lorem ipsum dor adipisicing.",
      date: "01/01/0001",
    },
    {
      id: nanoid(),
      text: "Lort amet consectetur adipisicing.",
      date: "01/01/0001",
    },
  ]);
  const [searchText, setSearchText] = useState("");

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
      <Search searchText={searchText} setSearchText={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
