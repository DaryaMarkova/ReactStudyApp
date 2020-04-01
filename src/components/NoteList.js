import React from 'react';
import classNames from 'classnames';

export function NoteList(props) {
    return (
        <React.Fragment>
            <div className={classNames('note py-2 pl-2')}>
                <div><b>{'2020/30/08 10:37:45'}</b></div>
                <div>{'New note 3'} </div>
            </div>
            <div className={classNames('note py-2 pl-2')}>
                <div><b>{'2020/30/08 10:36:41'}</b></div>
                <div>{'New note 2'} </div>
            </div>
            <div className={classNames('note py-2 pl-2')}>
                <div><b>{'2020/30/08 10:35:43'}</b></div>
                <div>{'New note 1'} </div>
            </div>
        </React.Fragment>
    )
}
