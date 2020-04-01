import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

import React, { useState, useEffect } from 'react';
import { NoteList } from './components/NoteList';
import { NoteEditor } from './components/NoteEditor';
import { DateTime } from 'luxon';

function App() {
    const [notes, setNotes] = useState([
        {
            text: 'First note',
            datetime: DateTime.local()
        },
        {
            text: 'Second note',
            datetime: DateTime.local()
        }
    ]);

    const [activeNote, setActiveNote] = useState(null);

    useEffect(() => {
        // if activeNote is empty then set default active note as first element of array
        if (!activeNote && notes.length > 0) {
            setActiveNote(notes[0])
        }
    }, [activeNote, notes]);

    const addNote = () => {
      const newNote = { text: 'New note', datetime: DateTime.local() };
      setNotes([...notes, newNote]);
      setActiveNote(newNote);
    };

    const onNoteClicked = note => setActiveNote(note);

    const onNoteChanged = newNote => {
        const index = notes.indexOf(activeNote);
        notes[index] = newNote;
        setActiveNote(newNote);
    };

    return (
        <div className="container-fluid">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="d-flex col-md-8">
                    <button type="button" className="btn btn-primary" onClick={addNote}>New Note</button>
                </div>
                <div className="d-flex col-md-8 mt-4">
                    <div className="w-25">
                        <NoteList items={notes} onItemClicked={onNoteClicked} activeNote={activeNote} />
                    </div>
                    <div className="w-75">
                        {
                           activeNote &&  <NoteEditor note={activeNote} onNoteChanged={onNoteChanged} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
