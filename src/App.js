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
  return (
    <div className="container">
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
