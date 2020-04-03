import React from 'react';
import classNames from 'classnames';
import { DateTime } from 'luxon';

export function NoteList(props) {
    const comparator = (item1, item2) => item2.datetime.valueOf() - item1.datetime.valueOf();

    return (
        <React.Fragment>
            {
                props.items.sort(comparator).map((item, index) => {
                    const lastUpdate = item.datetime.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

                    return (
                        <div
                            key={index}
                            className={classNames('note py-2 pl-2', {'active-note': item === props.activeNote})}
                            onClick={() => props.onItemClicked(item)}>
                            <div><b>{lastUpdate}</b></div>
                            <div className='d-flex align-items-center'>
                                <div className='w-75'>{item.text.slice(0, 15).concat('...')} </div>
                                <div className='w-25'>
                                    <button className='btn btn-link'><img style={{width: '24px', height: '24px'}} src='/remove_icon.svg' /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}
