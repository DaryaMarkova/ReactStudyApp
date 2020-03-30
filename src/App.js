import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';
import { NoteList } from './components/NoteList';
import { NoteEditor } from './components/NoteEditor';
import { DateTime } from 'luxon';

function App() {
	const [ notes, setNotes ] = useState([]);
	const [ activeNote, setActiveNote ] = useState({});

	const addNote = () => {
		const newNote = { text: 'New note', datetime: DateTime.local() };
		
		setNotes([...notes, newNote]);
		setActiveNote(newNote);
	}

	const noteChange = newNote => {
		const noteIndex = notes.indexOf(activeNote);
		const newNotes = notes.map( (note, index) => index === noteIndex ? newNote : note);

		setNotes(newNotes);
		setActiveNote(newNote);
	}

	const noteSelected = selectedNote => setActiveNote(selectedNote)
	

  return (
    <div className="container-fluid">
			<div className="row mt-5 d-flex justify-content-center">
				<div className="d-flex col-md-8">
					<button type="button" className="btn btn-primary" onClick={addNote}>New Note</button>
				</div>
				<div className="d-flex col-md-8 mt-4" >
					<div className="w-25">
						<NoteList notes={notes} noteClicked={noteSelected} activeNote={activeNote} />
					</div>
					<div className="w-75" >
						<NoteEditor note={activeNote} noteChanged={noteChange} />
					</div>
				</div>
  		</div>
    </div>
  );
}

export default App;
