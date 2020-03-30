import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

export const NoteList = props => {
	return (
		<React.Fragment>
			{
				( props.notes.sort((it1, it2) => it2.datetime.valueOf() - it1.datetime.valueOf())).map((note, index) => {
					const lastUpdated = note.datetime.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

					return (
						<div 
							key={index}
							onClick={ () => props.noteClicked(note)}
							style={{borderBottom: '1px solid #e9ecef', lineHeight: '30px', cursor: 'pointer' }}
							className = {classNames('Note py-2 pl-2', {'Active-note': note === props.activeNote})}>
								<div><b>{lastUpdated}</b></div>
								<div>{note.text.slice(0, 10).concat('...') } </div>
						</div>
					)
				})
			}
		</React.Fragment>
	)
}
