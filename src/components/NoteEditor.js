import React from 'react';

export const NoteEditor = props => {	
	const onTextChanged = event => {
		props.noteChanged({...props.note, text: event.target.value});
	}

	return (
		<textarea
			value={props.note.text || ''} 
			className="form-control w-100" 
			rows="10"
			onChange={onTextChanged}
			style={{border: '1px solid transparent', height:'100%', borderLeft: '1px solid #e9ecef', boxShadow: 'none'}}>
		</textarea>
	)
}