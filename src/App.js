import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './App.css';

import React from 'react';
import {NoteList} from './components/NoteList';
import {NoteEditor} from './components/NoteEditor';

function App() {
    return (
        <div className="container-fluid">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="d-flex col-md-8">
                    <button type="button" className="btn btn-primary">New Note</button>
                </div>
                <div className="d-flex col-md-8 mt-4">
                    <div className="w-25">
                        <NoteList/>
                    </div>
                    <div className="w-75">
                        <NoteEditor/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
