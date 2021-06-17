import React from 'react';
import './scss/TodoTemplate.scss';

export default function TodoTemplate({children}) {
    return (
        <div className="TodoTemplate">
            <h1 className="app-title">일정관리</h1>
            <div className="content">{children}</div>
        </div>
    )
}
