import React from 'react';
import { DateTime } from 'luxon';

export function NoteEditor (props) {
    return (
        <textarea
            value={props.note.text}
            onChange={(event) => {
                props.onNoteChanged({...props.note, text: event.target.value, datetime: DateTime.local()})
            } }
            className="editor form-control w-100"
            rows="10" />
    )
}